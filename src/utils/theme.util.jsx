import createThemeMui from "@mui/material/styles/createTheme";
import { createTheme } from "@nextui-org/react";
import { color } from "themes/colors";

export const nextuiTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: color.blue,
      success: color.green,
      error: color.redP,
      warning: color.orangeP,
      secondary: color.navi,
      light: color.white,
      dark: color.black,
    },
  },
});

export const muiTheme = createThemeMui({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans","Helvetica Neue", sans-serif`,
  },
});
