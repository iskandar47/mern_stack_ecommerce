import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    list: {
        width: "450px",
        height : "100vh",
        backgroundColor : "#fff"
    },
    cartProduct : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        "& div:last-child" : {
            width : "30%",
            borderBottom : "1px solid #CCC"
        }
    },
    cartIcon: {
        position : "relative",
        height : "24px"
    },
    cartNotif : {
        width : 18,
        height : 18,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        position: "absolute",
        top : -12,
        right : -10,
        backgroundColor : "red",
        color : "#fff",
        borderRadius : "50%"
    }
}))