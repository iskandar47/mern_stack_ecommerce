import React, { useState } from 'react'
import { Box, Typography, makeStyles, Divider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    dropDown : {
        position : "relative",
        "& div:first-child" : {
            cursor : "pointer",
            position : "relative",
        },
    },
    
    drop : {
        position : "absolute",
        top : 20,
        backgroundColor : "#fafafa",
        borderTop : "none",
        borderRadius : 2,
        borderBottom : "5px solid #ff9a00",
        "& ul" : {
            listStyle : "none",
            padding : "8px 16px 0px 8px",
            "& li" : {
                paddingTop : 4,
                cursor : "pointer",
            "& :hover" : {
                color : "#ff9a00"
            }
            }
        }
    }
}))

function DropDown({listItems, listName}) {
    const classes = useStyles()
    const [drop, setDrop] = useState(false)

    return (
        <Box className={classes.dropDown}  onMouseLeave={()=> setDrop(false)}  onMouseOver={()=> setDrop(true)} >
            <Box pl={1}>
                <Typography variant="h6" color={!drop ? "secondary" : "primary"}>{listName}</Typography>
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
