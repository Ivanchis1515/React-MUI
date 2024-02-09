import { createTheme } from "@mui/material/styles";

const StyledComponent = (mainColor, isDarkMode) => {
    return createTheme({
        palette:{
            mode: isDarkMode ? 'dark' : 'light',
            primary:{
                main: mainColor,
            },
            secondary: {
                main:'#f50057',
            },
        },
    });
}
export default StyledComponent;