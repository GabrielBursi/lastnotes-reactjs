import NoteFormProvider from '../../context/NoteFormContext';
import NoteForm from '../NoteForm/NoteForm';
import Notes from '../Notes/Notes'
import './notesArea.css'

function NotesArea() {
    return (
        <article className='notes-area'>
            <Notes/>
            <NoteFormProvider>
                <NoteForm/>
            </NoteFormProvider>
        </article>
    );
}

export default NotesArea;