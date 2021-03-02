import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    container : {
        marginTop : "20vh",
        paddingBottom : "10vh"
    },
    colors : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        "& .MuiBox-root" : {
            marginRight : 16
        }
    },
    colorBox : {
        width : 50,
        height : 70,
        margin : "10px 0px",
    },
    sizes : {
        "& .MuiFormControlLabel-root" : {
            marginRight : 14,
            marginLeft : 0,
        }
    },
    btns : {
        paddingTop : 10,
    "& button" : {
        marginRight : 16
    }
    }
}))