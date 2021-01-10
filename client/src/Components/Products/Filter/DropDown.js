import React, { useState } from 'react'
import { Box, Typography, makeStyles, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    dropDown : {
        "& div:first-child" : {
            cursor : "pointer",
            position : "relative",
        },
    },
    
    drop : {
        position : "absolute",
        top : 140,
        backgroundColor : "#fafafa",
        borderTop : "none",
        borderRadius : 2,
        borderBottom : "5px solid #388E8F",
        "& ul" : {
            listStyle : "none",
            padding : "8px 16px 0px 8px",
            "& li" : {
                paddingTop : 4,
                cursor : "pointer",
            "& :hover" : {
                color : "#053B4B"
            }
            }
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
                <Typography variant="h6" color={!drop ? "primary" : "secondary"}>{listName}</Typography>
                {
                    !drop ?
                    <ExpandMoreIcon color="primary" /> :
                    <ExpandLessIcon color="secondary" />
                }
            </Box>
            {
                !drop ?
                null :
                <Box className={classes.drop}>
                    <ul>
                        {listItems.map((item, i)=><li key={i}><Typography color="primary" variant="subtitle2">{item}</Typography></li>)}
                    </ul>
                </Box>
            }
        </Box>
    )
}

export default DropDown
