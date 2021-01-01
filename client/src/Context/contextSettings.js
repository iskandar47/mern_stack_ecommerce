import React, {createContext, useState} from 'react'

export const Context = createContext()

function ContextProvider({children}) {
    const [dir, setDir] = useState("ltr")
    const dirSettings = { dir, setDir }
    
    return (
        <Context.Provider value={{ dirSettings }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
