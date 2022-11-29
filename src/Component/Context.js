import React, { createContext, useState } from 'react'

export const globalState = createContext();

export default function Context({children}) {
    const [text, setText] = useState();
    return (
        <globalState.Provider value={{text, setText}}>
            {children}
        </globalState.Provider>
    )
}
