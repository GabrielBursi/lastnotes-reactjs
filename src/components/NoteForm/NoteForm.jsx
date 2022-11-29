import React, { useState, useContext } from 'react';
import { NoteListContext } from '../../context/NoteListContext';

import {FaCheck, FaBan} from 'react-icons/fa' ;
import { v4 as uuidv4 } from "uuid";

import './noteForm.css'

function NoteForm() {

    const {noteList, setNoteList} = useContext(NoteListContext);

    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    function handleSubmit(e){
        e.preventDefault();
        setNoteList([
            ...noteList,
            {
                id: uuidv4(),
                title,
                description: desc
            }
        ])
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
                    <FaBan className="icon"/>
                </button>
                <button type="submit" className="confirm">
                    <FaCheck className="icon"/>
                </button>
            </div>
        </form>
    );
}

export default NoteForm;