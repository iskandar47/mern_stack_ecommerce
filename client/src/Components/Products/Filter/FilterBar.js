import React from 'react'
import { Container, Grid, Box, TextField, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../styles'
import DropDown from './DropDown';

function FilterBar() {
    const classes = useStyles()
    const items = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    return (
        
        <Container maxWidth="xl">
            <Grid className={classes.filterBar}>
                {/* <Box>
                    <Typography variant="h6">Men</Typography>
                    <ExpandMoreIcon />
                </Box> */}
                <DropDown listName="Mens" listItems={items} />
                <Box>
                    <Typography variant="h6">Women</Typography>
                    <ExpandMoreIcon />
                </Box>
                <Box>
                    <Typography variant="h6">Kids</Typography>
                    <ExpandMoreIcon />
                </Box>
                <Box>
                    <Typography variant="h6">Cosmetics</Typography>
                    <ExpandMoreIcon />
                </Box>
                <Box>
                    <Typography variant="h6">Accessories</Typography>
                    <ExpandMoreIcon />
                </Box>
                <Box mr={1}>
                    <TextField id="standard-search" label={<SearchIcon color="secondary" />} type="search" />
                </Box>
            </Grid>
        </Container>
    )
}

export default FilterBar
