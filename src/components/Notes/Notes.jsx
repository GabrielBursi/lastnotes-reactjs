/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { DestaqueContext } from "../../context/DestaqueContext";
import { NoteFormContext } from "../../context/NoteFormContext";
import { NoteListContext } from "../../context/NoteListContext";

import Note from "../Note/Note";

import './notes.css'

function Notes() {

  const { destaque, setDestaque } = useContext(DestaqueContext);
  const { noteList, setNoteList } = useContext(NoteListContext)
  const { setTitle, setDesc } = useContext(NoteFormContext);

  useEffect(() => {
    getLocalNotes()
  }, []);

  useEffect(() => {
    if(destaque){
      const noteComDestaque = noteList.find((note) => note.id === destaque);

      setTitle(noteComDestaque.title);
      setDesc(noteComDestaque.description);
    }else{
      setTitle('')
      setDesc('')
    }
  }, [destaque]);

  function getLocalNotes(){
    let localNotes = localStorage.getItem('notes')
    if(localNotes === null){
      localStorage.setItem('notes',JSON.stringify([]))
    }else{
      localNotes = JSON.parse(localNotes)
      setNoteList(localNotes)
    }
  }

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