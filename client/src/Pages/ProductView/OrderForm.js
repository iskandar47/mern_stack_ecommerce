import React from 'react'
import { Container, Grid, Typography, Box, TextField, Button } from "@material-ui/core"
import { useStyles } from "./styles"
import OrderProps  from "./OrderProps"

function OrderForm() {
    const classes = useStyles()

    return (
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.orderForm}>
            <OrderProps />
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <TextField size="small" fullWidth id="outlined-basic" 
                label={<Typography variant="body2">Full name</Typography>} variant="outlined" 
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <TextField size="small" fullWidth id="outlined-basic" 
                label={<Typography variant="body2">Phone number</Typography>} variant="outlined" 
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <TextField size="small" fullWidth id="outlined-basic" 
                label={<Typography variant="body2">Email</Typography>} variant="outlined" 
                />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                    <TextField size="small" id="outlined-basic" 
                    label={<Typography variant="body2">State</Typography>} variant="outlined" 
                    /> 
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                    <TextField size="small" id="outlined-basic" 
                    label={<Typography variant="body2">City</Typography>} variant="outlined" 
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                <TextField size="small" fullWidth id="outlined-basic" 
                label={<Typography variant="body2">Address</Typography>} variant="outlined" 
                />
            </Grid>
            <Button fullWidth color="secondary" variant="contained">Confirm</Button>
        </Grid>
    )
}

export default OrderForm
