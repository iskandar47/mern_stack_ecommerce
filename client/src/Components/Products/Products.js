import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import ProductCard from "./ProductCard"
import FilterBar from "./Filter/FilterBar"
import {useStyles} from "./styles"

function Products() {
    const classes = useStyles()
    const products = ["Dsquared", "Zara", "Fendi", "Levis", "Nike", "Armani", "Versace", "Valentino" ]
    return (
        <Container maxWidth={false} style={{paddingTop : "15vh"}}>
            <FilterBar />
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    {products.map((name, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3} >
                            <ProductCard key={i} name={name} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    )
}

export default Products
