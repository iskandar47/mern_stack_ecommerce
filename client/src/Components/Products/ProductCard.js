import React from 'react'
import { useStyles } from "./styles"
import { Card, Box, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import tshirt from "../../assets/tshirt.png"

function ProductCard({name}) {
    const classes = useStyles()

    return (
        <Card className={classes.root} elevation={1}>
                <Box className={classes.image}>
                    <img src={tshirt} alt="tshirt" />
                </Box>

                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>

                <Box>
                    <Typography variant="body2">Sizes : S M L XL XLL</Typography>
                    <Box pt={1} className={classes.colors}>
                        <Typography variant="body2">Colors :</Typography>
                        <Box  style={{backgroundColor: "red"}}></Box>
                        <Box  style={{backgroundColor: "blue"}}></Box>
                        <Box  style={{backgroundColor: "green"}}></Box>
                        <Box  style={{backgroundColor: "yellow"}}></Box>
                        <Box  style={{backgroundColor: "orange"}}></Box>
                    </Box>
                </Box>
                </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                Order
                </Button>
                <Button size="small" color="primary">
                Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
