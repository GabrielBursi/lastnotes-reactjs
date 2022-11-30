import { useContext } from 'react';
import { NoteFormContext } from "../../context/NoteFormContext";

import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

import './actions.css'

function Actions() {
    const { visibleForm, setVisibleForm, titleRef } = useContext(NoteFormContext)
    
    async function handleForm(){
        if(visibleForm){
            setVisibleForm(false)
            return
        }
        await setVisibleForm(true)
        titleRef.current.focus()
    }

    return (
        <div className='cont-btn'>
            <button>
                <FaPlus className='icon' onClick={handleForm}/>
            </button>
            <button>
                <FaPencilAlt className='icon disabled'/>
            </button>
            <button>    
                <FaTrash className='icon disabled'/>
            </button>
        </div>
    );
}

export default Actions;