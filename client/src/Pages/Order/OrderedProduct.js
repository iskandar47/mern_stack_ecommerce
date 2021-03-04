import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core"
import tshirt from "../../assets/tshirt.png"
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove';
import { useStyles } from "./Styles"

function OrderedProduct() {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={9} xl={9}>
                <img src={tshirt} width="100px" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={classes.orderedProduct}>
                <Typography variant="h5">Valentino</Typography>
                <Typography variant="h6">size : S</Typography>
                <Typography variant="h6">color : red</Typography>
                <Box className={classes.units}>
                    <Typography variant="h6">units :</Typography>
                    <AddIcon color="primary"  fontSize="small"/>
                    <Typography variant="h5"> 1 </Typography>
                    <RemoveIcon color="primary" fontSize="small"/>
                </Box>
                <Typography variant="h6" color="primary">3200 DA</Typography>
            </Grid>
        </Grid>
    )
}

export default OrderedProduct
