import { makeStyles } from "@material-ui/core"
import banner from "../../assets/background.jpg"
import bg from "../../assets/homeBg.svg"

export const useStyles = makeStyles((theme) => ({
    container : {
        backgroundImage : `url("${banner}")`,
        backgroundSize : "cover",
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
        height : "92vh!important",
        boxShadow : "none!important",
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
    sectionTypo : {
        borderLeft : "8px solid #053B4B",
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
    line : {
        width : 50,
        height : 200,
        backgroundColor : "#053B4B",
        position : "absolute",
        bottom : -100,
        right : 300,
    }
}));