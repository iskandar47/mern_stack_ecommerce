import React from 'react'
import { Container, Grid, Box, TextField, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../styles'
import DropDown from './DropDown';

function FilterBar() {
    const classes = useStyles()
    const men = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const women = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const kids = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const cosmetics = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const accessories = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    return (
        
        <Container maxWidth="xl">
            <Grid className={classes.filterBar}>
                <DropDown listName="Men" listItems={men} />
                <DropDown listName="Women" listItems={women} />
                <DropDown listName="Kids" listItems={kids} />
                <DropDown listName="Cosmetics" listItems={cosmetics} />
                <DropDown listName="Accessories" listItems={accessories} />
                <Box mr={1}>
                    <TextField id="standard-search" label={<SearchIcon color="secondary" />} type="search" />
                </Box>
            </Grid>
        </Container>
    )
}

export default FilterBar
