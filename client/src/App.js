import React, {useContext} from 'react'
import { CssBaseline,  Box, Typography, Button } from "@material-ui/core"
import { ThemeProvider, jssPreset, StylesProvider } from "@material-ui/styles"
import { customTheme } from "./Theme/theme"
import rtl from "jss-rtl"
import { create } from "jss"
import { Context } from "./Context/contextSettings"
import Pages from './Pages/Pages'



function App() {
    
    const {dirSettings : {dir}} = useContext(Context)
    const jss = create({ plugins : [...jssPreset().plugins, rtl()] })
    document.body.dir = dir

    return (
        <div>
            <StylesProvider jss={jss}>

                <ThemeProvider theme={ customTheme({direction : dir}) }>
                    <CssBaseline/>
                    <Pages/>
                </ThemeProvider>

            </StylesProvider>
        </div>
    )
}

export default App
