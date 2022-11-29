import { useContext } from "react";
import { DestaqueContext } from "../../context/DestaqueContext";
import { NoteListContext } from "../../context/NoteListContext";

import Note from "../Note/Note";

import './notes.css'

function Notes() {

    const { destaque, setDestaque } = useContext(DestaqueContext);
    const { noteList} = useContext(NoteListContext)

    return (
      <section>
        {noteList.map(note => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            destaque={destaque}
            setDestaque={setDestaque}
          />
        ))}
      </section>
    );
}

export default Notes;