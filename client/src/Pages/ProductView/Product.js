import React from "react"
import { Container, Grid, Typography, Box } from "@material-ui/core"
import { useStyles } from "./styles"
import bag from "../../assets/bag.png"
import OrderForm from "./OrderForm"

function Product() {
    const classes = useStyles()
    const colors = ["red" , "yellow", "green", "blue", "orange"]

    return (
        <Container maxWidth={"xl"} className={classes.container}>
            <Grid container >
                <Grid className={classes.colors} item xs={1} sm={1} md={1} lg={1} xl={1}>
                    {
                        colors.map(color => (
                            <Box 
                            style={{backgroundColor : `${color}`}}
                            key={color} 
                            className={classes.colorBox}
                            ></Box>
                        ))
                    }
                </Grid>
                <Grid item xs={11} sm={11} md={6} lg={6} xl={6}>
                    <img width="300px" src={bag} alt="product" />
                    <Box width="60%">
                        <Typography variant="h3" color="secondary">Zara Bag</Typography>
                        <Typography variant="body2" color="textSecondary">This is some description for this product to show client what this product is </Typography>
                        <Typography variant="h5" color="primary">3500 DA</Typography>
                    </Box>
                </Grid>
                
                <OrderForm />

            </Grid>
        </Container>
    )
}

export default Product
