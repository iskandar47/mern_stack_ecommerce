import React, { useState } from 'react'
import { Box, Typography, makeStyles, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    dropDown : {
        "& div:first-child" : {
            cursor : "pointer",
            position : "relative"
        },
    },
    
    drop : {
        position : "absolute",
        top : 140,
        backgroundColor : "#EFEFEF",
        borderTop : "none",
        borderRadius : 4,
        "& ul" : {
            listStyle : "none",
            padding : "12px 16px 0px 8px"
        }
    }
}))

function DropDown({listItems, listName}) {
    const classes = useStyles()
    const [drop, setDrop] = useState(false)
    console.log(drop)

    return (
        <Box className={classes.dropDown}  onMouseLeave={()=> setDrop(false)}  onMouseMove={()=> setDrop(true)} >
            <Box pl={1}>
                <Typography variant="h6">{listName}</Typography>
                <ExpandMoreIcon />
            </Box>
            {
                !drop ?
                null :
                <Box className={classes.drop}>
                    <ul>
                        {listItems.map((item, i)=><li key={i}><Typography variant="h6">{item}</Typography></li>)}
                    </ul>
                </Box>
            }
        </Box>
    )
}

export default DropDown
