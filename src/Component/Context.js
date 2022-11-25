import React, { createContext, useState } from 'react'

export const searchText = createContext();

export default function Context({children}) {
    const [text, setText] = useState();
    
    return (
        <searchText.Provider value={{text, setText}}>
            {children}
        </searchText.Provider>
    )
}
