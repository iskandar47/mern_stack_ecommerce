import React, {useState, useContext} from 'react';
import { useTranslation } from "react-i18next"
import { Context } from "../../../Context/contextSettings"
import { Link } from "react-router-dom"
import i18n from "../../../i18n/i18n"
import eShop from "../../../assets/e.svg"
import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography, Container, Hidden } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"
import LanguageIcon from '@material-ui/icons/Language';
import TemporaryDrawer from "./Drawer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiToolbar-gutters" : {padding : 0}
  },
  logo: {
    /* marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2), */
  },
  links: {
    flexGrow: 1,
    margin : "0px 16px",
    "& a" : {
      textDecoration : "none",
      color : "#333",
      margin : "0px 8px"
    }
  },
  langBtn : {
    fontSize : 16,
    margin : "0px 16px",
    textTransform : "lowerCase",
    "&:hover" : {backgroundColor : "transparent"}
  },
}));

export default function Header() {

  const classes = useStyles();
  const {t} = useTranslation()
  const {dirSettings : {setDir}} = useContext(Context)
  const [language, setLanguage] = useState("ar")

  const switchLang = (lang) => {
      setLanguage(prev => prev === "en" ? "ar" : "en")
      i18n.changeLanguage(lang)
      setDir(i18n.dir())
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={4}>
        <Container maxWidth="xl">
          <Toolbar>

            <IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
              <img src={eShop} alt="logo" width="40px" />
            </IconButton>
            
            <Typography variant="body1" color="primary" className={classes.links}>
              <Hidden smDown>
                <Link to="/">{t("Home")}</Link> 
                <Link to="/products">{t("Products")}</Link>
                <Link to="/categories">{t("Categories")}</Link>
                <Link to="/dashbord">{t("Dashbord")}</Link>
              </Hidden>
            </Typography>
            
            <Button className={classes.langBtn} color="inherit" onClick={()=>switchLang(language)}>
              {language === "ar" ? "العربيه": "English"}
              <LanguageIcon fontSize="small" style={{margin : "0px 4px"}} />
            </Button>

            <Hidden smDown>
              <Button color="secondary" variant="outlined">Login</Button>
            </Hidden>

            <Hidden mdUp>  
              <TemporaryDrawer/>
            </Hidden>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

