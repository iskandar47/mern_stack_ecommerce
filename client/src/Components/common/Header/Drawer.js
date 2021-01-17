import React from 'react';
import clsx from 'clsx';
import { makeStyles, Box, SwipeableDrawer, List, ListItem, Divider, ListItemText, Typography } from '@material-ui/core';
import { useTranslation } from "react-i18next"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from '@material-ui/icons/Close';
import Cart from "../../Cart/Cart"

const useStyles = makeStyles({
    list: {
      width: 250,
      backgroundColor : "#FFF",
      height : "100%"
    },
    fullList: {
      width: 'auto',
    },
    menuIcon : {
      cursor : "pointer"
    }
  });
  
  export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const { t } = useTranslation()
    const anchor = "left"
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        
        <List>
          {['Home', 'Products', 'Categories', 'Login'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={<Typography variant="h6">{t(text)}</Typography>} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div >
            <MenuIcon 
            fontSize="large" 
            className={classes.menuIcon}
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
