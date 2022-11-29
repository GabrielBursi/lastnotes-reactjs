import NoteListProvider from '../../context/NoteListContext';
import NoteForm from '../NoteForm/NoteForm';
import Notes from '../Notes/Notes'
import './notesArea.css'

function NotesArea() {
    return (
        <article className='notes-area'>
        <NoteListProvider>
            <Notes/>
        </NoteListProvider>
        <NoteForm/>
        </article>
    );
}

export default NotesArea;