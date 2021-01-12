import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    container : {
        padding : "5vh 0vh",
        /* backgroundColor : "rgba(256, 256, 256, 0.7)" */
    },
    /* shapes : {
        zIndex : -10
    },
    circle : {
        height : 700,
        width : 700,
        borderRadius : "50%",
        position : "absolute",
        background: "radial-gradient(circle, rgba(56,142,143,1) 13%, rgba(255,255,255,1) 38%)",
        zIndex : -9
    }, */
    socialAccounts : {
        display : "flex",
        justifyContent : "space-between",
        "& button" : {
            width : "49%"
        }
    },
    form : {
        width : "50%",
        margin : "auto",
        paddingBottom : 50,
        "& h2" : {
            margin : "16px",
        },
        "& form" : {
            display : "flex",
            flexDirection : "column",
        },
        "& .MuiFormControl-root" : {
            margin : "4px 0px",
        },
        "& .MuiFormLabel-root" : {
            fontSize: 18
        },
        "& .MuiInputBase-input" : {
            height : 18
        },
        "& .MuiButtonBase-root" : {
            height : 55,
            marginTop : 4
        },
        "& > p" : {
            width: "100%", 
            borderBottom: "1px solid #CCC",
            lineHeight: "0.1em",
            margin: "20px 0px 20px",
            "& span" : {
                backgroundColor : "#FFF",
                padding : "0px 12px"
            }
        }
    },
    [theme.breakpoints.down("sm")] : {
        form : {
            width : "70%",
        }
    },
    [theme.breakpoints.down("xs")] : {
        form : {
            width : "90%",
        }
    }
}))