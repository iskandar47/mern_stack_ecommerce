import React, { useState, useEffect, useRef } from 'react'
import { Container, Typography, Grid, Button, Box, Paper, Hidden } from '@material-ui/core'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Banner from "../../assets/pngkey.com-off-white-png-8316956.png"
import tshirt from "../../assets/tshirt.png"
import jeans from "../../assets/pants1.png"
import bag from "../../assets/bag.png"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import ReplayIcon from '@material-ui/icons/Replay';
import clsx from "clsx"
import {useStyles} from "./styles"



function Home() {
    const classes = useStyles()
    const [arrow, setArrow] = useState(true)
    const scndSection = useRef(null)

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const scroller = () => scrollToRef(scndSection)

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            window.pageYOffset !== 0 ? setArrow(false) : setArrow(true)
        })
    }, [])

    return (
        <>
        <Container maxWidth={false} className={classes.container}>
            <Container maxWidth="xl">
                <Grid container className={clsx(classes.section, classes.hero)}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <Box>
                            <Typography variant="h1" color="primary">SIMPLICITY</Typography>
                            <Typography variant="body1" color="secondary">is the key note of all true elegance .</Typography>
                            <Typography variant="body1" color="secondary">Take your elegance to higher levels with eSTORE .</Typography>
                            
                            <Box pt={1}>
                                <Button variant="contained" color="secondary">
                                    Browse all Products
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                        <img width="100%" src={Banner} alt="banner" />
                    </Grid>
                </Grid>
            </Container>
                {
                    arrow ? 
                    <Box className={classes.arrow} onClick={scroller}>
                        <ArrowDownwardOutlinedIcon color="primary" /> 
                    </Box> :
                    null
                }
        </Container>
        <Container maxWidth={false} className={classes.homeSections}>
            <Container maxWidth="xl">
                <Grid container className={classes.section} ref={scndSection}>

                    <Grid item  md={6} lg={6} xl={6}>
                        <img width="50%" src={tshirt} alt="banner" />
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className={classes.sectionTypo}>
                            <Typography variant="h2" color="primary">Clothing</Typography>
                            <Typography variant="body1" color="secondary">is the key note of all true elegance .</Typography>
                            <Typography variant="body1" color="secondary">Take your elegance to higher level with eSTORE</Typography>
                            
                            <Box pt={1}>
                                <Button variant="contained" color="secondary">
                                    Shop Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


                <Hidden smDown>
                    <Grid container className={(classes.section)} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.sectionTypo}>
                                <Typography variant="h2" color="primary">Cosmetics</Typography>
                                <Typography variant="body1">is the key note of all true elegance .</Typography>
                                <Typography variant="body1">Take your elegance to higher levels with eSTORE</Typography>
                                
                                <Box pt={1}>
                                    <Button variant="contained" color="secondary">
                                        Shop Now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={6} xl={6} >
                            <img width="40%" src={jeans} alt="banner" />
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    <Grid container className={(classes.section)} >

                        <Grid item lg={6} xl={6} >
                            <img width="60%" src={jeans} alt="banner" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.sectionTypo}>
                                <Typography variant="h2" color="primary">Jeans</Typography>
                                <Typography variant="body1">is the key note of all true elegance .</Typography>
                                <Typography variant="body1">Take your elegance to higher levels with eSTORE</Typography>
                                
                                <Box pt={1}>
                                    <Button variant="contained" color="secondary">
                                        Shop Now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid container className={(classes.section)} >
                    <Grid item  md={6} lg={6} xl={6}>
                        <img width="40%" src={bag} alt="banner" />
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className={classes.sectionTypo}>
                            <Typography variant="h2" color="primary">Accessories</Typography>
                            <Typography variant="body1">is the key note of all true elegance .</Typography>
                            <Typography variant="body1">Take your elegance to higher level with eSTORE</Typography>
                            
                            <Box pt={1}>
                                <Button variant="contained" color="secondary">
                                    Shop Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Grid container className={classes.features} spacing={5}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <SupervisorAccountIcon />
                    <Typography align="center" variant="h2" color="primary">Support</Typography>
                    <Typography align="center" variant="body1" color="textSecondary">
                        This is some text do describe this feature 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <LocalShippingIcon />
                    <Typography align="center" variant="h2" color="primary">Fast</Typography>
                    <Typography align="center" variant="body1" color="textSecondary">
                        This is some text do describe this feature 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <ReplayIcon />
                    <Typography align="center" variant="h2" color="primary">Return</Typography>
                    <Typography align="center" variant="body1" color="textSecondary">
                        This is some text do describe this feature 
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Home
