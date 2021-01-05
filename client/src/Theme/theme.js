import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import typography from "./typography"
import palette from "./palette"
import overrides from "./overrides"

const options = {
    direction : "ltr", 
    typography,
    palette,
    overrides,
    breakpoints: {
        values: {
          xs: 0,
          sm: 575,
          md: 768,
          lg: 992,
          xl: 1200,
        },
      },
}
export const customTheme = (config = {}) =>  createMuiTheme({...options, ...config})