import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useStyles } from "./styles"


function DropDown({listItems, listName, variant}) {
    const classes = useStyles()
    const [drop, setDrop] = useState(false)

    return (
        <Box className={classes.dropDown}  onMouseLeave={()=> setDrop(false)}  onMouseOver={()=> setDrop(true)} >
            <Box pl={1}>
                <Typography variant={variant} color={!drop ? "secondary" : "primary"}>{listName}</Typography>
                {
                    !drop ?
                    <ExpandMoreIcon color="secondary" /> :
                    <ExpandLessIcon color="primary" />
                }
            </Box>
            {
                !drop ?
                null :
                <Box className={classes.drop}>
                    <ul>
                        {listItems.map((item, i)=><li key={i}><Typography color="secondary" variant="subtitle2">{item}</Typography></li>)}
                    </ul>
                </Box>
            }
        </Box>
    )
}

export default DropDown
