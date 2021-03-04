import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=> ({
  container : {
    marginBottom : 20
  },
  FilterBar : {
    width : "100%",
    listStyle : "none",
    display : "inline-flex",
    justifyContent : "space-between",
    padding : "0px",
    "& .MuiInputBase-root" : {
      height : "40px",
      borderColor : "red"
    },
    '& .MuiOutlinedInput-root': {  
      '& fieldset': {            
          border: 'none',   
      },
      '&:hover fieldset': {
        border: 'none', 
      },
  },
  },
  wrapper : {
    position : "relative",
    borderBottom : "1px solid #ccc",
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
    padding : "15px 20px",
    position : "absolute",
    backgroundColor : "#fff",
    border : "1px solid #CCC",
    width : "100%",
    left : 0,
    borderRadius : "0px 0px 6px 6px",
    animation : `$effect 500ms ease-in-out`,
    zIndex : 100,
    "& h6" : {
      paddingBottom : 8
    },
    "& ul" : {
      paddingLeft : 0,
      listStyle : "none",
      maxHeight : "180px",
      overflow : "scroll",
      "& li" : {
        fontSize : 16,
        color: "#333",
        height : 30,
        transition : "200ms all linear",
        "&:hover" : {
          color : "#FF9A00",
          borderLeft : "solid 3px #FF9A00",
          paddingLeft : 8
        }
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
    justifyContent : "space-between",
    maxHeight : 200,
    "& div" : {
      display : "flex",
      alignItems : "center",
    }
  },
  mobileBarContainer : {
    position : "relative",
    borderRadius : "6px 6px 0px 0px",
    backgroundColor : "#FF9A00",
  },
  categoriesBtn : {
    height : 40,
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
  },
  mobileDrop : {
    /* padding : 16, */
    position : "absolute", 
    left : 0, 
    width:"100%", 
    backgroundColor : "#fff",
    border : "1px solid #CCC",
    borderRadius : "0px 0px 6px 6px",
    "& li" : {
      margin : "8px 16px"
    }
  }
}))