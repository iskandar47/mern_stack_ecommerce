import React from 'react'
import { Box } from "@material-ui/core"
import { useStyles } from "./styles"

function Colors() {
    const classes = useStyles()
    const colors = ["red" , "yellow", "green", "blue", "orange"]
    
    return (
        <Box className={classes.colors}>
        {
            colors.map(color => (
                <Box 
                style={{backgroundColor : `${color}`}}
                key={color} 
                className={classes.colorBox}
                ></Box>
            ))
        }
        </Box>
    )
}

export default Colors
