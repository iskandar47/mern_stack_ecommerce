import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    footer : {
        marginTop : 200,
        backgroundColor : "#FAFAFA",
        display : "flex",
        padding : "32px 0px",
        "& h4" : {
            paddingBottom : 16
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
})