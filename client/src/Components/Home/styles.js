import { makeStyles } from "@material-ui/core"
import banner from "../../assets/background.jpg"

export const useStyles = makeStyles((theme) => ({
    container : {
        backgroundImage : `url("${banner}")`,
        backgroundSize : "cover",
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
        borderLeft : "8px solid #32289B",
        paddingLeft : 24,
        "& button" : {
            marginTop : 32
        }
    },
    line : {
        width : 50,
        height : 200,
        backgroundColor : "#32289B",
        position : "absolute",
        bottom : -100,
        right : 300,
    }
}));