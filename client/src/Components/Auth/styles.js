import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    container : {
        padding : "10vh 0vh",
        height : "90vh",
    },
    form : {
        width : "50%",
        margin : "auto",
        "& h2" : {
            margin : "16px",
        },
        "& div" : {
            display : "flex",
            flexDirection : "column",
        },
        "& .MuiFormControl-root" : {
            margin : "8px 0px"
        },
        "& .MuiFormLabel-root" : {
            fontSize: 18
        },
        "& .MuiInputBase-input" : {
            marginLeft : 30
        }
    }
}))