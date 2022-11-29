import NoteForm from '../NoteForm/NoteForm';
import Notes from '../Notes/Notes'
import './notesArea.css'

function NotesArea() {
    return (
        <article className='notes-area'>
            <Notes/>
            <NoteForm/>
        </article>
    );
}

export default NotesArea;