/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { NoteListContext } from '../../context/NoteListContext';
import { NoteFormContext } from '../../context/NoteFormContext';
import { DestaqueContext } from '../../context/DestaqueContext';

import {FaCheck, FaBan} from 'react-icons/fa' ;
import { v4 as uuidv4 } from "uuid";

import './noteForm.css'

function NoteForm() {

    const { noteList, setNoteList } = useContext(NoteListContext);
    const { title, setTitle, desc, setDesc, setVisibleForm, titleRef } = useContext(NoteFormContext);
    const { destaque, setDestaque } = useContext(DestaqueContext)

    useEffect(() => {
        setLocalNotes()
    }, [noteList]);

    function handleSubmit(e){
        e.preventDefault();
        if(title === '' || desc === '') return

        if(destaque){
            noteList.map(note => {
                if(note.id === destaque){
                    note.title = title
                    note.description = desc
                }
            })
            setNoteList([...noteList])
            return
        }

        setNoteList([
            ...noteList,
            {
                id: uuidv4(),
                title,
                description: desc
            }
        ])
        setDesc("");
        setTitle("");
        titleRef.current.focus()
    }

    function handleCancel(e){
        e.preventDefault()
        setDestaque(false)
        setVisibleForm(false)
        setDesc('')
        setTitle('')
    }

    function setLocalNotes(){
        localStorage.setItem('notes', JSON.stringify(noteList))
    }

    return (
        <form className="note-menu" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Titulo</label>
                <input 
                    id="title" 
                    type="text" 
                    placeholder="Informe um titulo" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)}
                    ref={titleRef}
                />
            </div>
            <div>
                <label htmlFor="note">Nota</label>
                <textarea
                    id="note"
                    type= " text "
                    rows= " 10 "
                    placeholder="Escreva a sua nota"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button className="cancel">
                    <FaBan className="icon" onClick={handleCancel}/>
                </button>
                <button type="submit" className="confirm">
                    <FaCheck className="icon"/>
                </button>
            </div>
        </form>
    );
}

export default NoteForm;