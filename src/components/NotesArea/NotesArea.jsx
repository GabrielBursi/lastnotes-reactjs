import { useContext } from 'react';

import { NoteFormContext } from '../../context/NoteFormContext';
import NoteForm from '../NoteForm/NoteForm';
import Notes from '../Notes/Notes'
import './notesArea.css'

function NotesArea() {
    const { visibleForm } = useContext(NoteFormContext);
    return (
        <article className='notes-area'>
            <Notes/>
                {visibleForm && <NoteForm/>}
        </article>
    );
}

export default NotesArea;