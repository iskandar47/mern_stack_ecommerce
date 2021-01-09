import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    root: {
        margin : "auto",
        borderRadius : 0,
        maxWidth: "100%",
        "& .MuiCardContent-root" : {
            padding : "8px 16px"
        }
      },
      image : {
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          "& img" : {
            width : 200,
          },
      },
      colors : {
          display : "flex",
          flexDirection : "row",
          alignItems : "center",
        "& div" : {
            height : "15px",
            width : "15px",
            borderRadius : "50%",
            margin : "0px 2px"
        }
      },
      filterBar : {
        marginBottom : "5vh",
        paddingBottom : 24,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-end",
        backgroundColor : "#EFEFEF",
        borderRadius : 4,
        "& .MuiBox-root" : {
          display : "flex",
          flexDirection : "row",
          alignItems : "center"
        },
        "& .MuiInputBase-input" : {
          paddingBottom : 0
        }
      }
}))