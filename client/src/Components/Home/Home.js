import React, { useState, useEffect } from 'react'
import { makeStyles, Container, Typography, Grid, Button, Box } from '@material-ui/core'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Banner from "../../assets/pngkey.com-off-white-png-8316956.png"
import tshirt from "../../assets/tshirt.png"
import jeans from "../../assets/pants1.png"
/* import Banner from "../../assets/fashionBanner2.png" */

const useStyles = makeStyles((theme) => ({
    hero : {
        justifyContent : "center",
        alignItems : "center",
        height : "90vh",
        "& h1" : {fontSize : 60, letterSpacing : 8, fontWeight : 700},
        "& > div:last-child" : {
            display : "flex",
            flexDirection : "row",
            justifyContent : "flex-end"
        }
    },
    shape : {
        height : "300px",
        width : "300px",
        borderRadius : "50%",
        backgroundColor : "#FDA50F",
        position : "absolute",
        top : -70,
        right : 0,
        zIndex : -10
    },
    arrow : {
        width : 50,
        height : 50,
        backgroundColor : "#FFF",
        display : "flex",
        justifyContent : "center!important",
        alignItems : "center!important",
        borderRadius : "50%",
        position : "fixed",
        bottom : 20,
        cursor : "pointer",
        boxShadow : "2px 5px 10px #CCC"
    },
}));

function Home() {
    const classes = useStyles()
    const [arrow, setArrow] = useState(true)
    const scroller = () => {
        window.scrollTo(0, 500)
    }
    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            window.pageYOffset !== 0 ? setArrow(false) : setArrow(true)
        })
    }, [])

    return (
        <Container maxWidth='xl'>
            <Grid container className={classes.hero}>
                <Grid item lg={6} xl={6}>
                    <Box>
                        <Typography variant="h1" color="secondary">SIMPLICITY</Typography>
                        <Typography variant="h6">is the key note of all true elegance .</Typography>
                        <Typography variant="h6">Take your elegance to higher levels <br/> with eSTORE .</Typography>
                        
                        <Box pt={1}>
                            <Button variant="outlined" color="secondary">
                                <Typography>Browse all Products</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item lg={6} xl={6} style={{position : "relative",}}>
                    <img width="100%" src={Banner} alt="banner" />
                    <Box className={classes.shape}></Box>
                </Grid>
                {
                    arrow ? 
                    <Box className={classes.arrow} onClick={scroller}>
                        <ArrowDownwardOutlinedIcon color="secondary" /> 
                    </Box> :
                    null
                }
            </Grid>


            <Grid container className={classes.hero}>
                <Grid item lg={6} xl={6}>
                    <img width="60%" src={tshirt} alt="banner" />
                </Grid>

                <Grid item lg={6} xl={6}>
                    <Box>
                        <Typography variant="h1" color="secondary">Tshirts</Typography>
                        <Typography variant="h6">is the key note of all true elegance .</Typography>
                        <Typography variant="h6">Take your elegance to higher level <br/> with eSTORE .</Typography>
                        
                        <Box pt={1}>
                            <Button variant="outlined" color="secondary">
                                <Typography>Shop Now</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.hero}>
                <Grid item lg={6} xl={6}>
                    <Box>
                        <Typography variant="h1" color="secondary">Jeans</Typography>
                        <Typography variant="h6">is the key note of all true elegance .</Typography>
                        <Typography variant="h6">Take your elegance to higher levels <br/> with eSTORE .</Typography>
                        
                        <Box pt={1}>
                            <Button variant="outlined" color="secondary">
                                <Typography>Shop now</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item lg={6} xl={6} >
                    <img width="50%" src={jeans} alt="banner" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
