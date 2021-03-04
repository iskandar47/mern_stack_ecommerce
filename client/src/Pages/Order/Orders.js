import React from 'react'
import { Container, Grid, Box, Typography, Divider, TextField } from "@material-ui/core"
import { useStyles } from "./Styles"
import OrderForm from "./OrderForm"
import OrderedProduct from "./OrderedProduct"


function Orders() {
    const classes = useStyles()

    return (
        <Container maxWidth="xl" className={classes.container}>
            
            <Grid container >
            <Grid item item xs={12} sm={12} md={12} lg={6} xl={6}>
                <Typography variant="subtitle1" >Your order :</Typography>
                <Divider/>
                <OrderedProduct />
                <Divider/>
                <OrderedProduct />
                <Divider />
                <Grid container className={classes.totalPrice}>
                    <Grid item xs={12} sm={12} md={4} lg={9} xl={9}>
                        <Typography variant="h4">Total price :</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={3} xl={3}>
                        <Typography variant="h4" color="primary">8500 DA</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={0} sm={0} md={1} lg={1} xl={1} ></Grid>

            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                <Typography variant="subtitle1" >Complete your informations :</Typography>
                <OrderForm />
            </Grid>

            </Grid>
        </Container>
    )
}

export default Orders
