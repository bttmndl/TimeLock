import React, { createContext, useState } from 'react'

export const globalState = createContext();

export default function Context({children}) {
    const [text, setText] = useState();
    const [view, setView] = useState(false);
    return (
        <globalState.Provider value={{text, setText, view, setView}}>
            {children}
        </globalState.Provider>
    )
}
