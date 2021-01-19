import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    container : {
        marginTop : "15vh",
       /*  border : "3px solid #EFEFEF" */
    },
    colors : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center"
    },
    colorBox : {
        width : 50,
        height : 50,
        margin : "10px 0px",
    },
    orderForm : {
        "& .MuiFormControl-root" : {
            margin : "4px 0px"
        },
        "& button" : {
            marginTop : 4,
            height : 45
        }
    }
}))