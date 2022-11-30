import { logDOM } from '@testing-library/react';
import React, { useContext } from 'react';
import { DestaqueContext } from '../../context/DestaqueContext';
import { NoteFormContext } from '../../context/NoteFormContext';


import './note.css'

function Note({title, description, id}) {
    const {destaque, setDestaque} = useContext(DestaqueContext);
    const { setVisibleForm, titleRef } = useContext(NoteFormContext);

    async function criarDestaque(){
        if (destaque === id) {
            setDestaque(false);
            setVisibleForm(false);
        } else {
            setDestaque(id);
            await setVisibleForm(true);
            titleRef.current.focus();
        }
    }

    return (
        <div 
            className={`card${destaque === id && ' destaque'}`} 
            style={{width: '18rem'}} 
            onClick={criarDestaque}
            id={id}
        >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description} 
                </p>
            </div>
        </div>
    );
}

export default Note;