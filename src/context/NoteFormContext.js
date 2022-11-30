import { createContext, useState } from "react";

export const NoteFormContext = createContext()

function NoteFormProvider({children}) {
    const [visibleForm, setVisibleForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    return (
        <NoteFormContext.Provider 
            value={{
                    title, 
                    setTitle, 
                    desc, 
                    setDesc, 
                    visibleForm, 
                    setVisibleForm
                }}
            >
            {children}
        </NoteFormContext.Provider>
    );
}

export default NoteFormProvider;