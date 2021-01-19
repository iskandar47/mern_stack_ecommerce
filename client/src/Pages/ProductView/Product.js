import React from "react"
import { Container, Grid, Typography, Box, TextField, Button } from "@material-ui/core"
import { useStyles } from "./styles"
import bag from "../../assets/bag.png"

function Product() {
    const classes = useStyles()
    const colors = ["red" , "yellow", "green", "blue", "orange"]

    return (
        <Container maxWidth={"xl"} className={classes.container}>
            <Grid container >
                <Grid className={classes.colors} item xs={12} sm={1} md={1} lg={1} xl={1}>
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
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img width="300px" src={bag} alt="product" />
                    <Box width="60%">
                        <Typography variant="h3" color="secondary">Zara Bag</Typography>
                        <Typography variant="body2" color="textSecondary">This is some description for this product to show client what this product is </Typography>
                        <Typography variant="h5" color="primary">3500 DA</Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.orderForm}>
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
            </Grid>
        </Container>
    )
}

export default Product
