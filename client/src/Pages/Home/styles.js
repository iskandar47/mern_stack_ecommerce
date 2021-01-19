import { makeStyles } from "@material-ui/core"
/* import banner from "../../assets/background.jpg" */
/* import banner from "../../assets/pexels-sonny-sixteen-2035416.jpg" */
import banner from "../../assets/pexels-kaique-rocha-242124.jpg"
import bg from "../../assets/homeBg.svg"

export const useStyles = makeStyles((theme) => ({
    container : {
        backgroundImage : `url("${banner}")`,
        backgroundSize : "cover",
        display : "flex",
        alignItems : "center",
        height : "95vh",
        position : "relative",
        [theme.breakpoints.down("md")] : {
            height : "100vh"
        }
    },
    homeSections : {
        backgroundImage : `url("${bg}")`,
        backgroundSize : "cover",
        paddingBottom : 100,
    },
    section : {
        justifyContent : "center",
        alignItems : "center",
        "& > div:last-child" : {
            display : "flex",
            flexDirection : "row",
            justifyContent : "flex-end",
        },
        [theme.breakpoints.down("sm")] : {
            height : "auto",
            marginBottom : 42,
            "& .MuiGrid-item" : {
                display : "flex",
                flexDirection : "column",
                justifyContent : "center!important",
                alignItems : "center",
                "& div" : {width : "90%"}
            }
        }
    },
    hero : {
        backgroundColor : "rgba(256, 256, 256, 0.2)",
        backdropFilter : "blur(4px)",
        border : "1px solid #CCC",
        borderRadius : 12,
        boxShadow : "none!important",
        boxShadow : "3px 5px 15px #333",
        padding : "52px 32px",
        zIndex : 10,
        [theme.breakpoints.down("md")] : {
            marginTop : 40
        }
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
        bottom : 8,
        left : "50%",
        transform : "translate(-50%)",
        cursor : "pointer",
        boxShadow : "2px 5px 10px #333"
    },
    sectionTypo : {
        borderLeft : "8px solid #555",
        paddingLeft : 24,
        "& button" : {
            marginTop : 32
        },
        [theme.breakpoints.down("sm")] : {
            borderLeft : "none",
            paddingLeft : 0,
            paddingTop : 12,
            marginTop : 12,
            borderTop : "2px solid #CCC"
        }
    },
    
}));