import { createContext, useState, useRef } from "react";

export const NoteFormContext = createContext()

function NoteFormProvider({children}) {
    const [visibleForm, setVisibleForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    const titleRef = useRef()

    return (
        <NoteFormContext.Provider 
            value={{
                    title, 
                    setTitle, 
                    desc, 
                    setDesc, 
                    visibleForm, 
                    setVisibleForm,
                    titleRef
                }}
            >
            {children}
        </NoteFormContext.Provider>
    );
}

export default NoteFormProvider;