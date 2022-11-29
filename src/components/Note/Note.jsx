import React, { useContext } from 'react';
import { DestaqueContext } from '../../context/DestaqueContext';


import './note.css'

function Note() {
    const {destaque, setDestaque} = useContext(DestaqueContext);
    return (
        <div className={`card ${destaque ? 'destaque' : ''}`} style={{width: '18rem'}} onClick={()=>{
                setDestaque(!destaque)
            }}>
            <div className="card-body">
                <h5 className="card-title">Titulo</h5>
                <p className="card-text">
                    descrição 
                </p>
            </div>
        </div>
    );
}

export default Note;