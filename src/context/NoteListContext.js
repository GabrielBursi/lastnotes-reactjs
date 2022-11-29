import React, { useState, createContext } from 'react';

export const NoteListContext = createContext()

function NoteListProvider({children}) {
    const [noteList, setNoteList] = useState([]);
    return (
        <NoteListContext.Provider value={{noteList, setNoteList}}>
            {children}
        </NoteListContext.Provider>
    );
}

export default NoteListProvider;