import { createContext, useState } from "react";

export const NoteFormContext = createContext()

function NoteFormProvider({children}) {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    return (
        <NoteFormContext.Provider value={{title, setTitle, desc, setDesc}}>
            {children}
        </NoteFormContext.Provider>
    );
}

export default NoteFormProvider;