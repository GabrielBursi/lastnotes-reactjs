import {FaCheck, FaBan} from 'react-icons/fa' ;

import './noteForm.css'

function NoteForm() {
    return (
        <form className="note-menu">
            <div>
                <label htmlFor="title">Titulo</label>
                <input id="title" type="text" placeholder="Informe um titulo"/>
            </div>
            <div>
                <label htmlFor="note">Nota</label>
                <textarea
                    id="note"
                    type= " text "
                    rows= " 10 "
                    placeholder="Escreva a sua nota"
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