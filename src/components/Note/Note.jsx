import React, { useContext } from 'react';
import { DestaqueContext } from '../../context/DestaqueContext';
import { NoteFormContext } from '../../context/NoteFormContext';


import './note.css'

function Note({title, description, id}) {
    const {destaque, setDestaque} = useContext(DestaqueContext);
    const { setVisibleForm } = useContext(NoteFormContext);
    return (
        <div 
            className={`card ${destaque ? 'destaque' : ''}`} 
            style={{width: '18rem'}} 
            onClick={()=>{
                if(destaque){
                    setVisibleForm(true)
                }
                setDestaque(!destaque)
            }}
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