import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    container : {
        marginTop : "15vh",
        marginBottom : "20vh",
        "& .MuiTypography-subtitle1" : {
            marginBottom : 32
        }
    },
    orderForm : {
        "& > .MuiGrid-root" : {
            paddingBottom : 8
        },
    },
    units : {
        display : "flex",
        alignItems : "center",
        "& h6" : {
            marginRight : 12
        }
    },
    orderedProduct : {
        paddingTop : 8
    },
    totalPrice : {
        marginTop : 32,
    }
})