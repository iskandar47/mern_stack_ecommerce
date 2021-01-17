
import React from 'react';
import { SwipeableDrawer, Box, Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./style"
import tshirt from "../../assets/tshirt.png"


export default function Cart () {
  const classes = useStyles();
  const anchor = "right";

  const product = {
      name : "Nike",
      size : "M",
      color : "Black",
      price : "3800 DA",
      image : tshirt
  }
  const product2 = {
      name : "Zara",
      size : "XL",
      color : "Red",
      price : "5200 DA",
      image : tshirt
  }
  const products = [product, product2]

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Box p={2} onClick={toggleDrawer(anchor, false)}><CloseIcon/></Box>
        <List>
            {
            products.map((item, i) => (
                <Box p={2} className={classes.cartProduct} key={i}>
                    <Box>
                        <img width="50px" alt={item.name} src={item.image} />
                        <Typography align="center" variant="h5">{item.name}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="textPrimary">Size : {item.size}</Typography>
                        <Typography variant="body2" color="textPrimary">Color : {item.color}</Typography>
                        <Typography variant="body2" color="textPrimary">Price : </Typography> 
                        <Typography variant="h5" color="primary">{item.price}</Typography>
                    </Box>
                </Box>
            ))
            }
            <Divider />
            <Box pt={5} p={2} display="flex" justifyContent="center">
                <Typography variant="h4">Total :</Typography>
                <Box p={1}></Box>
                <Typography variant="h4" color="primary">3800 DA</Typography>
            </Box>
            <Box p={2} pt={0}>
                <Button variant="outlined" color="primary" fullWidth={true}>
                    Order Now
                </Button>
            </Box>
        </List>
    </div>
  );

  return (
    <div className={classes.cartIcon}>
        <Box className={classes.cartNotif}>1</Box>
        <ShoppingCartIcon 
        onClick={toggleDrawer(anchor, true)} 
        /> 
        
        <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
        >
            {list(anchor)}
        </SwipeableDrawer>
    </div>
  );
}
