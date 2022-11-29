import React, { useContext } from 'react';
import { DestaqueContext } from '../../context/DestaqueContext';


import './note.css'

function Note({title, description, id}) {
    const {destaque, setDestaque} = useContext(DestaqueContext);
    return (
        <div 
            className={`card ${destaque ? 'destaque' : ''}`} 
            style={{width: '18rem'}} 
            onClick={()=>{
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