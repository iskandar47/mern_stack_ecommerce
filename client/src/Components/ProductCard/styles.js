import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    root: {
        margin : "auto",
        /* borderRadius : 0, */
        maxWidth: "100%",
        paddingBottom : 8,
        "& .MuiCardContent-root" : {
            padding : "8px 16px"
        },
        "& .MuiButton-label" : {
            [theme.breakpoints.down("lg")]: {
                fontSize : 12
            }
        },
        "& .MuiCardActions-root" : {
            /* padding : "8px 0px", */
            /* "& .MuiButtonBase-root" : {
                borderRadius : 0
            } */
        }
    },
    image : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        "& img" : {
          width : 200,
        },
    },
    colors : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
      "& div" : {
          height : "15px",
          width : "15px",
          borderRadius : "50%",
          margin : "0px 2px"
      }
    },
}))