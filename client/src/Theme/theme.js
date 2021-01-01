import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import typography from "./typography"
import palette from "./palette"
import overrides from "./overrides"
import i18n from "../i18n/i18n"

const options = {
    direction : "ltr", 
    typography,
    palette,
    overrides,
    /* shadows : ["none"], */
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