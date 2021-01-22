import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
    filterBar : {
        marginBottom : "5vh",
        paddingBottom : 24,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-end",
        backgroundColor : "#FAFAFA",
        borderBottom : "4px solid #ff9a00",
        borderRadius : 4,
        "& .MuiBox-root" : {
          display : "flex",
          flexDirection : "row",
          alignItems : "center"
        },
        "& .MuiInputBase-input" : {
          paddingBottom : 0
        }
      },
      mobileFilterBar : {
        display : "flex",
        alignItems : "flex-end",
        paddingBottom : 16,
        marginBottom : 16,
        backgroundColor : "#fafafa", 
        "& div:first-child" : {
          display : "flex",
          flexDirection : "row",
          alignItems : "center"
        },
      },
      dropDown : {
        position : "relative",
        "& div:first-child" : {
            cursor : "pointer",
            position : "relative",
        },
    },
    
    drop : {
        position : "absolute",
        top : 20,
        backgroundColor : "#fafafa",
        borderTop : "none",
        borderRadius : 2,
        borderBottom : "5px solid #ff9a00",
        zIndex : 100,
        "& ul" : {
            listStyle : "none",
            padding : "8px 16px 0px 8px",
            "& li" : {
                paddingTop : 4,
                cursor : "pointer",
            "& :hover" : {
                color : "#ff9a00"
            }
            }
        }
    }
}))