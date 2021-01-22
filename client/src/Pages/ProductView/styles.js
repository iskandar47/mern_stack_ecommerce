import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    container : {
        marginTop : "15vh",
       /*  border : "3px solid #EFEFEF" */
    },
    colors : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "flex-start"
    },
    colorBox : {
        width : 50,
        height : 50,
        margin : "10px 0px",
    },
    orderForm : {
        "& .MuiFormControl-root" : {
            margin : "4px 0px",
            /* padding : "0px 4px" */
        },
        "& button" : {
            marginTop : "4px",
            height : 45,
        }
    },
    props : {
        "& div" : {
            display : "flex",
            flexDirection : "row",
            alignItems : "center",
            /* height : "30px", */
            "& div" : {
                marginLeft : "12px"
            }
        }
    },
    addMin : {
        "& svg" : {
            fontSize : 16,
            margin : "0px 4px"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline" : {
            border : "none"
        },
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      total : {
          marginBottom : 6,
          "& .MuiGrid-root" : {
              marginLeft : "0px!important",
              width : "50%"
          }
      },
      colorsDrop : {
          marginBottom : 6,
          marginLeft : "0px!important",
          "& .MuiBox-root" : {
              marginLeft : 0,
              paddingLeft : 0
          }
      }
}))