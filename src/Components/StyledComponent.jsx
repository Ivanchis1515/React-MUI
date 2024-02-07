import { createTheme } from "@mui/material/styles";
const lightTheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
export { lightTheme, darkTheme };