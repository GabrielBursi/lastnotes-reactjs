import { useContext } from 'react';
import { NoteFormContext } from "../../context/NoteFormContext";
import { DestaqueContext } from "../../context/DestaqueContext";
import { NoteListContext } from "../../context/NoteListContext";

import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

import './actions.css'

function Actions() {
    const { visibleForm, setVisibleForm, titleRef, setTitle, setDesc } = useContext(NoteFormContext)
    const { destaque, setDestaque } = useContext(DestaqueContext)
    const { noteList, setNoteList } = useContext(NoteListContext)
    
    async function handleAdd(){
        if(visibleForm || destaque){

            setDesc('')
            setTitle('')
            setDestaque(false)
            setVisibleForm(false)
            titleRef.current.focus();
        }else{
            await setVisibleForm(true)
            titleRef.current.focus()
        }
    }

    function handleEdit(){
        if(destaque){
            const noteComDestaque = noteList.find(note => note.id === destaque)

            setTitle(noteComDestaque.title)
            setDesc(noteComDestaque.desc)
            setVisibleForm(!visibleForm)
        }
    }

    function handleDelete(){
        if(destaque){
            setTitle('')
            setDesc('')
            setDestaque(false)

            const noteComDestaque = noteList.findIndex(note => note.id === destaque)
            noteList.splice(noteComDestaque, 1)

            setNoteList([...noteList])
        }
    }

    return (
        <div className='cont-btn'>
            <button>
                <FaPlus className='icon' onClick={handleAdd}/>
            </button>
            <button>
                <FaPencilAlt className={`icon ${!destaque && 'disabled'}`} onClick={handleEdit}/>
            </button>
            <button>    
                <FaTrash className={`icon ${!destaque && 'disabled'}`} onClick={handleDelete}/>
            </button>
        </div>
    );
}

export default Actions;