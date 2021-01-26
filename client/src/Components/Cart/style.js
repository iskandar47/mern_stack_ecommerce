import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    list: {
        width: "450px",
        height : "100vh",
        backgroundColor : "#fff",
        [theme.breakpoints.down("sm")] : {
            width : 350
        },
        [theme.breakpoints.down("xs")] : {
            width : 300
        }
    },
    cartProduct : {
        display : "flex",
        flexDirection : "row",
        "& img" : {
            marginRight : 20
        },
        "& div:last-child" : {
            marginLeft : "auto",
            
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
    },
    addMin : {
        display : "flex",
        flexDirection : "row",
        alignItems :"center",
        marginBottom : 12
    }
}))