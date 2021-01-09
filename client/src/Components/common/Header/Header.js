import React, { useContext} from 'react';
import { useTranslation } from "react-i18next"
import { Context } from "../../../Context/contextSettings"
import { Link, useHistory } from "react-router-dom"
import eShop from "../../../assets/e.svg"
import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography, Container, Hidden, Box } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import TemporaryDrawer from "./Drawer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiToolbar-gutters" : {padding : 0}
  },
  links: {
    flexGrow: 1,
    margin : "0px 16px",
    "& a" : {
      textDecoration : "none",
      color : "#444444",
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

  const history = useHistory()
  const classes = useStyles();
  const {t} = useTranslation()
  const {dirSettings : { language, switchLang}} = useContext(Context)
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={4}>
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
                <Link to="/dashbord">{t("Dashbord")}</Link>
              </Hidden>
            </Typography>
            
            <Button className={classes.langBtn} color="inherit" onClick={()=>switchLang(language)}>
              {language === "ar" ? "العربيه": "English"}
              <LanguageIcon fontSize="small" style={{margin : "0px 4px"}} />
            </Button>

            <Hidden smDown>
              <Button color="primary" variant="outlined" onClick={()=> history.push("/login")}>
                Login
              </Button>
              <Box pl={1} pr={1}></Box>
              <Button color="secondary" variant="contained" onClick={()=> history.push("/register")}>
                Register
              </Button>
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

