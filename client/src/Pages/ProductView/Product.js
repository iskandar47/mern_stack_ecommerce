import React from "react"
import { Container, Grid, Typography, Box, Divider, FormControlLabel, Select, MenuItem, Button, Checkbox } from "@material-ui/core"
import { useStyles } from "./styles"
import { useHistory } from "react-router-dom"
import bag from "../../assets/bag.png"
import Sizes from "./Sizes"
import Colors from "./Colors"

function Product() {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Container maxWidth={"xl"} className={classes.container}>
            <Grid container >
               
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img width="300px" src={bag} alt="product" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                    <Box className={classes.productInfo}>
                        <Typography variant="h3" color="secondary">Zara Bag</Typography>
                        <Typography variant="body1" color="textSecondary">This is some description for this product to show client what this product is. </Typography>
                        <Box mb={2}></Box>
                        <Typography variant="h3" color="primary">3500 DA</Typography>
                    </Box>

                    <Box mt={2} mb={2}>
                        <Divider/>
                    </Box>

                    <Typography variant="h6">status : <span style={{color : "green"}}>in stock</span></Typography>

                    <Box>
                        <Typography variant="h6">sizes : </Typography>
                        <Sizes />
                    </Box>

                    <Box>
                        <Typography variant="h6">colors : </Typography>
                        <Colors />
                    </Box>

                    <Box mt={2} mb={2}>
                        <Divider/>
                    </Box>
                    
                    <Box  className={classes.btns}>
                        <Button variant="contained" color="secondary" onClick={()=> history.push('/orders')}>order now</Button>
                        <Button variant="outlined" color="primary">add to cart</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Product
