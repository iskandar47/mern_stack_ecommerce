import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
    footer : {
        backgroundColor : "#FAFAFA",
        display : "flex",
        marginTop : 30,
        padding : "32px 0px",
        "& h4" : {
            paddingBottom : 16
        },
        [theme.breakpoints.down("sm")] : {
            "& h4" : {
                fontSize : 16
            },
            "& h6" : {
                fontSize : 12
            },
            "& h5" : {
                fontSize : 14
            }
        }
    },
    footerIcons : {
        paddingTop : 32,
        "& div" : {
            display : "flex",
            flexDirection : "row",
            alignItems : "center",
            "& h4" : {
                margin : "0px 6px"
            },
            "& svg" : {
                marginRight : 8,
                cursor : "pointer"
            }
        }
    },
    copyright : {
        color : "#ABABAB",
        marginTop : "16px",
        paddingTop : "2px",
        borderTop : "1px solid #CCC"
    },
    langBtn : {
        cursor : "pointer",
        "& svg" : {
            margin : "0px 4px"
        }
    }
}))