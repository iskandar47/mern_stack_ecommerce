import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
  FilterBar : {
    width : "100%",
    listStyle : "none",
    display : "inline-flex",
    justifyContent : "space-between",
    padding : "0px",
    "& .MuiInputBase-root" : {
      height : "40px",
      borderColor : "red"
    }
  },
  wrapper : {
    position : "relative",
    /* border : "1px solid #333", */
    "& ul": {
      margin : 0,
    },
    "& li" : {
      height : "40px",
      display : "flex",
      alignItems : "center",
      cursor : "pointer"
    }
  },
  drop : {
    marginTop : 0,
    padding : "10px 20px",
    position : "absolute",
    borderRadius : 4,
    backgroundColor : "rgba(0,0,0, 0.8)",
    width : "100%",
    left : 0,
    animation : `$effect 500ms ease-in-out`,
    zIndex : 100,
    "& ul" : {
      paddingLeft : 0,
      listStyle : "none",
      "& li" : {
        fontSize : 16,
        color: "#fff",
        height : 30
      }
    }
  },
  "@keyframes effect" : {
    "0%" : {
      opacity : 0,
    },
    "100%" : {
      opacity : 1,
    }
  },
  dropDownProduct : {
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-around",
    "& div" : {
      display : "flex",
      alignItems : "center",
    }
  }
}))