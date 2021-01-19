import React from 'react'
import { Container, Grid, Box, TextField, Hidden, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles'
import DropDown from './DropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function FilterBar() {
    const classes = useStyles()
    const men = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const women = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const kids = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const cosmetics = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    const accessories = ["tshirt", "sweatshirt", "jackets", "shoes", "jeans" ]
    return (
        <>
        <Hidden smDown>
            <Container maxWidth="xl">
                <Grid className={classes.filterBar}>
                    <DropDown listName="Men" listItems={men} />
                    <DropDown listName="Women" listItems={women} />
                    <DropDown listName="Kids" listItems={kids} />
                    <DropDown listName="Cosmetics" listItems={cosmetics} />
                    <DropDown listName="Accessories" listItems={accessories} />
                    <Box mr={1}>
                        <TextField  id="standard-search" label={<SearchIcon color="secondary" />} type="search" />
                    </Box>
                </Grid>
            </Container>
        </Hidden>
        <Hidden mdUp>
            <Grid container className={classes.mobileFilterBar}>
                <Grid item xs={8} sm={8} md={8}>
                    <Typography variant="h6" color="primary">Categories</Typography>
                    <ExpandMoreIcon />
                </Grid>
                <Grid item xs={4} sm={4} md={8}>
                    <Box mr={1}>
                        <TextField 
                        InputProps={{disableUnderline : true}}
                        fullWidth={false} 
                        id="standard-search" 
                        label={<SearchIcon color="secondary" />} 
                        type="search" 
                        />
                    </Box>
                </Grid>
            </Grid>
        </Hidden>
        </>
    )
}

export default FilterBar
