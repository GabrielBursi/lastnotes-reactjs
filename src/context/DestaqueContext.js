import React, { useState, createContext } from 'react';

export const DestaqueContext = createContext()

function DestaqueProvider({children}) {
    const [destaque, setDestaque] = useState(false);
    return (
        <DestaqueContext.Provider value={{destaque, setDestaque}}>
            {children}
        </DestaqueContext.Provider>
    );
}

export default DestaqueProvider;