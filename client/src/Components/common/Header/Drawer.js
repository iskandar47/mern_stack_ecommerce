import React, {useState, useContext} from 'react';
import clsx from 'clsx';
import { makeStyles, SwipeableDrawer, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { useTranslation } from "react-i18next"
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
    list: {
      width: 250,
      paddingTop : 44,
      backgroundColor : "red"
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
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'Products', 'Categories', 'Login'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={t(text)} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div>
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
