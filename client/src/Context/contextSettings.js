import React, {createContext, useState} from 'react'
import i18n from "../i18n/i18n"

export const Context = createContext()

function ContextProvider({children}) {
    const [dir, setDir] = useState("ltr")
    const [language, setLanguage] = useState("ar")

    const switchLang = (lang) => {
        setLanguage(prev => prev === "en" ? "ar" : "en")
        i18n.changeLanguage(lang)
        setDir(i18n.dir())
    }
    const dirSettings = { dir, setDir, switchLang, language }
    
    return (
        <Context.Provider value={{ dirSettings }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
