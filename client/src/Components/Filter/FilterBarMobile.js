import React, { useState } from 'react'
import { Grid, Container, Box, Typography } from "@material-ui/core"
import { useStyles } from "./styles"
import ViewListIcon from '@material-ui/icons/ViewList';

function FilterBarMobile() {
    const classes = useStyles()
    const [open, setOpen] = useState(null)
    return (
        <>
        <Container maxWidth="xl" className={classes.mobileBarContainer}>
            <Box className={classes.categoriesBtn}>
                <Typography variant="h6">Categories</Typography>
                <ViewListIcon />
            </Box>
            <Grid className={classes.mobileDrop}>
            <ul style={{margin : 0, padding : 0, listStyle : "none"}}>
                <li onClick={()=>setOpen("men")}> Men 
                    <ul style={{display : open === "men" ? "block" : "none"}}>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </li>
                <li onClick={()=>setOpen("women")}>Women
                <ul style={{display : open === "women" ? "block" : "none"}}>
                        <li>world</li>
                        <li>world</li>
                        <li>world</li>
                        <li>world</li>
                    </ul>
                </li>
                <li>Kids</li>
                <li>Cosmetics</li>
                <li>Accessories</li>
            </ul>
            </Grid>
        </Container>

        
        </>
    )
}

export default FilterBarMobile
