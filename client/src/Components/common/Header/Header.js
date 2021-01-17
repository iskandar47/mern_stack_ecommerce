import React, { useContext} from 'react';
import { useTranslation } from "react-i18next"
import { Context } from "../../../Context/contextSettings"
import { Link, useHistory } from "react-router-dom"
import eShop from "../../../assets/e.svg"
import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography, Container, Hidden, Box } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import TemporaryDrawer from "./Drawer"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from "../../../Components/Cart/Cart"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiToolbar-gutters" : {padding : 0},
    "& .MuiAppBar-root" : {
      top : 37,
      left : 0,
      [theme.breakpoints.down("md")] : {
        top : 0,
      }
    }
  },
  links: {
    flexGrow: 1,
    margin : "0px 16px",
    "& a" : {
      textDecoration : "none",
      /* color : "rgb(64, 75, 105)", */
      color : "#555",
      margin : "0px 8px"
    }
  },
  langBtn : {
    fontSize : 16,
    margin : "0px 16px",
    textTransform : "lowerCase",
    color : "#555",
    "&:hover" : {backgroundColor : "transparent"}
  },
}));

export default function Header() {

  const history = useHistory()
  const classes = useStyles();
  const {t} = useTranslation()
  const {dirSettings : { language, switchLang}} = useContext(Context)
  
  console.log(history.location.pathname)
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0} position={"absolute"}>
        <Container maxWidth="xl">
          <Toolbar>

            <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
              <img src={eShop} alt="logo" width="40px" />
            </IconButton>
            
            <Typography variant="h6" className={classes.links}>
              <Hidden smDown>
                <Link to="/">{t("Home")}</Link> 
                <Link to="/products">{t("Products")}</Link>
                <Link to="/categories">{t("Categories")}</Link>
              </Hidden>
            </Typography>
            
            <Button className={classes.langBtn} color="secondary" onClick={()=>switchLang(language)}>
              {language === "ar" ? "العربيه": "English"}
              <LanguageIcon color="secondary" fontSize="small" style={{margin : "0px 4px"}} />
            </Button>

            <Hidden smDown>
             
              <Cart />
              <Box pl={3} pr={0}></Box>
              <ExitToAppIcon color="secondary" onClick={()=> history.push("/register")} />
              
            </Hidden>
            <Hidden mdUp>  
              <Cart />
              <Box pr={4}></Box>
              <TemporaryDrawer/>
            </Hidden>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

