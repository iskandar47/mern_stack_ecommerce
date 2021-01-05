import React, {useContext, useState} from 'react'
import { useStyles } from "./styles"
import { Typography, Container, Grid, Box, Button } from '@material-ui/core'
import eshop from "../../../assets/e.svg"
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'  
import LanguageIcon from '@material-ui/icons/Language';  
import {Context} from "../../../Context/contextSettings"
import i18n from "../../../i18n/i18n"

function Footer() {
    const classes = useStyles()
    const {dirSettings : { switchLang, language}} = useContext(Context)

    return (
        <Container maxWidth={false} className={classes.footer}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography variant="h4" color="secondary">Shop</Typography>
                        <Typography variant="h6">Men</Typography>
                        <Typography variant="h6">Women</Typography>
                        <Typography variant="h6">Kids</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography variant="h4" color="secondary">Accessoire</Typography>
                        <Typography variant="h6">Bags</Typography>
                        <Typography variant="h6">Phone cases</Typography>
                        <Typography variant="h6">Watchs</Typography>
                        <Typography variant="h6">Cosmetics</Typography>
                        <Typography variant="h6">Parfum</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography variant="h4" color="secondary">Support</Typography>
                        <Typography variant="h6">Customer service</Typography>
                        <Typography variant="h6">Order status</Typography>
                        <Typography variant="h6">Store location</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography variant="h4" color="secondary">Contact</Typography>
                        <Typography variant="h5">Email :</Typography>
                        <Typography variant="h6">email@gmail.com</Typography>
                        <Typography variant="h5">Phone :</Typography>
                        <Typography variant="h6">+213 775 897 433</Typography>
                        <Typography variant="h5">Adress :</Typography>
                        <Typography variant="h6">21 street <br/> west algiers 16500</Typography>
                    </Grid>
                </Grid>

                <Grid container className={classes.footerIcons}>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <img src={eshop} width="40px" />
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <FacebookIcon fontSize="large" color="primary" /> 
                        <InstagramIcon fontSize="large" color="primary" />
                        <TwitterIcon fontSize="large" color="primary" />
                        <WhatsAppIcon fontSize="large" color="primary" />
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Box className={classes.langBtn} color="inherit" onClick={()=>switchLang(language)}>
                        <Typography variant="h6">
                            {language === "ar" ? "العربيه": "English"}
                        </Typography>
                        <LanguageIcon fontSize="small" />
                    </Box>
                    </Grid>

                </Grid>
                <Box className={classes.copyright}>
                    <Typography variant="body2" align="right">eSTORE © Copy rights 2020. All right reserved</Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default Footer
