import React from 'react'
import { Container, Hidden, Typography, Box } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme)=> ({
    adBar : {
        /* height : 40, */
        width : "100%",
        /* backgroundColor : "rgb(64, 75, 105)", */
        /* background : "linear-gradient(142deg, rgba(0, 0, 119, 1) 0%, rgba(136,252,254,1) 100%)",
        background: rgb(255,154,0); */
        background: "linear-gradient(142deg, rgba(255,154,0,1) 0%, rgba(255,77,0,1) 100%)"
    },
    typo : {
        padding : "6px 0px",
        animation: `$anim1 20s ${theme.transitions.easing.easeIn}`,
        animationIterationCount : "infinite",
        opacity: 1,
        transform: "translateX(100%)",
        "& h6" : {
            color : "#FFF",
            margin : 0
        }
    },
    "@keyframes anim1": {
        "0%": {
          transform: "translateX(-100%)"
        },
        "100%": {
          transform: "translateX(100%)"
        }
      },
    
}))

function AdsBar() {
    const classes = useStyles()

    return (
        <Hidden mdDown>
            <Container maxWidth={false} className={classes.adBar}>
                <Box className={classes.typo}>
                    <Typography variant="h6" color="secondary">
                        Buy 4 items & save 20% 
                        <span style={{paddingLeft : "30px"}}></span>
                        Buy 4 items & save 20% 
                        <span style={{paddingLeft : "30px"}}></span>
                        Buy 4 items & save 20% 
                        <span style={{paddingLeft : "30px"}}></span>
                        Buy 4 items & save 20% 
                        <span style={{paddingLeft : "30px"}}></span>
                        Buy 4 items & save 20% 
                    </Typography>
                </Box>
                
            </Container>
        </Hidden>
    )
}

export default AdsBar
