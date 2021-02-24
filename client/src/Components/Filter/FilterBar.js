import React, { useState, useRef } from 'react'
import { Container, Grid, Box, TextField, Hidden, Typography, Button, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles'
import DropDown from './DropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import bag from "../../assets/bag.png"

function FilterBar() {
    const classes = useStyles()
    const ref = useRef(null)
    const [open, setOpen] = useState(false)
    const [category, setCategory] = useState([])

    const men = ["jeans", "tshirt", "sweatshirt", "jackets", "shoes"]
    const women = ["robe", "sweatshirt", "mantaux", "shoes", "jeans", "robe", "sweatshirt", "mantaux", "shoes", "jeans"  ]
    const kids = ["boy", "babe", "jackets", "klak", "short" ]
    const cosmetics = ["parfume", "deodorant", "makeup", "shampo" ]
    const accessories = ["bags", "headphones", "glooves", "hats", "watch" ]

    const openDrop = (obj) => {
        setCategory([])
        setCategory(obj)
        setOpen(true)
    }
    return (
       <Container maxWidth="xl" className={classes.container}>
           <Box className={classes.wrapper}>
            <ul className={classes.FilterBar}>
                <li onMouseOver={()=> openDrop(men)} onMouseOut={()=> setOpen(false)}>
                    <Typography variant="h6">Men</Typography>
                    <ExpandMoreIcon/>
                </li>
                <li onMouseOver={()=> openDrop(women)} onMouseOut={()=> setOpen(false)}>
                    <Typography variant="h6">Women</Typography>
                    <ExpandMoreIcon/>
                </li>
                <li onMouseOver={()=> openDrop(kids)} onMouseOut={()=> setOpen(false)}>
                    <Typography variant="h6">Kids</Typography>
                    <ExpandMoreIcon/>
                </li>
                <li onMouseOver={()=> openDrop(cosmetics)} onMouseOut={()=> setOpen(false)}>
                    <Typography variant="h6">Cosmetics</Typography>
                    <ExpandMoreIcon/>
                </li>
                <li onMouseOver={()=> openDrop(accessories)} onMouseOut={()=> setOpen(false)}>
                    <Typography variant="h6">Accessories</Typography>
                    <ExpandMoreIcon/>
                </li>
                <TextField id="filled-basic" label={<SearchIcon color="secondary" />} variant="outlined" size="small" />
            </ul>
            
            <Grid 
            container 
            style={{display : open ? "flex" : "none"}}
            className={classes.drop}
            onMouseLeave={()=> setOpen(false)}
            onMouseOver={()=> setOpen(true)}
            >
                <Grid item lg={4} xl={4} md={4}>
                    <Typography variant="h6" color="primary">Category</Typography>
                    <ul>
                        {category ? category.map((item, i)=> <li key={i}>{item}</li>) : null}
                    </ul>
                </Grid>
                <Grid item lg={4} xl={4} md={4}>
                <Typography variant="h6" color="primary">Brands</Typography>
                <ul>
                    {category ? category.map((item, i)=> <li key={i}>{item}</li>): null}
                </ul>
                </Grid>
                <Grid item lg={4} xl={4} md={4} className={classes.dropDownProduct}>
                    <Box>
                        <img width="100px" src={bag} />
                        <Box p={2}></Box>
                        <Typography variant="body2" color="primary">This is some description about this product</Typography>
                    </Box>
                    <Button color="secondary" variant="contained">Details</Button>
                </Grid>
            </Grid>
           </Box>
       </Container>
    )
}

export default FilterBar
