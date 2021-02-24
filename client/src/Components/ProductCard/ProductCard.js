import React from 'react'
import { Card, Box, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { useStyles } from "./styles"
import tshirt from "../../assets/tshirt.png"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function ProductCard( {name} ) {
    const classes = useStyles()
    const history = useHistory()
    const colors = ["red" , "yellow", "green", "blue", "orange"]

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
                        
                        {colors.map(color => (
                            <Box key={color} style={{backgroundColor: `${color}`}}></Box>
                        ))}
                    </Box>
                </Box>
                
            </CardContent>
            <CardActions>
                {/* <Button size="small" color="secondary" variant="contained" onClick={()=> history.push('/product')}>
                    Details
                </Button> */}
                <Button fullWidth size="small" color="primary" variant="outlined" endIcon={<AddShoppingCartIcon fontSize="small" />}>
                    add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
