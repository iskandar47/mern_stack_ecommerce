import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useStyles } from "./styles"


function DropDown({listItems, listName, variant}) {
    const classes = useStyles()
    const [drop, setDrop] = useState(false)

    return (
        <h5>somthing</h5>
    )
}

export default DropDown
