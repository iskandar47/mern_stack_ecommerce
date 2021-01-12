import React, { useState, useEffect, useRef } from 'react'
import { Container, Typography, Grid, Button, Box, Paper, Hidden } from '@material-ui/core'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Banner from "../../assets/pngkey.com-off-white-png-8316956.png"
import tshirt from "../../assets/tshirt.png"
import jeans from "../../assets/pants1.png"
import bag from "../../assets/bag.png"
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
                        <Typography variant="h1" color="secondary">SIMPLICITY</Typography>
                        <Typography variant="body1" color="secondary">is the key note of all true elegance .</Typography>
                        <Typography variant="body1" color="secondary">Take your elegance to higher levels with eSTORE .</Typography>
                        
                        <Box pt={1}>
                            <Button variant="contained" color="primary">
                                Browse all Products
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{position : "relative",}}>
                    <img width="100%" src={Banner} alt="banner" />
                </Grid>
                {
                    arrow ? 
                    <Box className={classes.arrow} onClick={scroller}>
                        <ArrowDownwardOutlinedIcon color="primary" /> 
                    </Box> :
                    null
                }
                <Hidden mdDown>
                <Box className={classes.line}></Box>
                </Hidden>
            </Grid>
        </Container>
        </Container>
        <Container maxWidth={false} className={classes.homeSections}>
        <Container maxWidth="xl">
            <Grid container className={classes.section} ref={scndSection}>

                <Grid item  md={6} lg={6} xl={6}>
                    <img width="50%" src={tshirt} alt="banner" />
                </Grid>
                
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box className={classes.sectionTypo}>
                        <Typography variant="h2" color="secondary">Clothing</Typography>
                        <Typography variant="body1" color="textPrimary">is the key note of all true elegance .</Typography>
                        <Typography variant="body1" color="textPrimary">Take your elegance to higher level with eSTORE</Typography>
                        
                        <Box pt={1}>
                            <Button variant="outlined" color="primary">
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            <Hidden mdDown>
                <Grid container className={(classes.section)} >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box className={classes.sectionTypo}>
                            <Typography variant="h2" color="secondary">Cosmetics</Typography>
                            <Typography variant="body1">is the key note of all true elegance .</Typography>
                            <Typography variant="body1">Take your elegance to higher levels with eSTORE</Typography>
                            
                            <Box pt={1}>
                                <Button variant="outlined" color="secondary">
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
                            <Typography variant="h2" color="secondary">Jeans</Typography>
                            <Typography variant="body1">is the key note of all true elegance .</Typography>
                            <Typography variant="body1">Take your elegance to higher levels with eSTORE</Typography>
                            
                            <Box pt={1}>
                                <Button variant="outlined" color="secondary">
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
                        <Typography variant="h2" color="secondary">Accessories</Typography>
                        <Typography variant="body1">is the key note of all true elegance .</Typography>
                        <Typography variant="body1">Take your elegance to higher level with eSTORE</Typography>
                        
                        <Box pt={1}>
                            <Button variant="outlined" color="secondary">
                                Shop Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Container>
        </Container>
        </>
    )
}

export default Home
