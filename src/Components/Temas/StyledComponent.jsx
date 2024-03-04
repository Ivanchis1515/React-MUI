import { createTheme } from "@mui/material/styles";

const StyledComponent = (mainColor, isDarkMode) => {
    return createTheme({
        palette:{
            mode: isDarkMode ? 'dark' : 'light',
            primary:{
                main: mainColor,
            },
            secondary: {
                // Define los colores específicos que necesitas
                light: '#EDE7F6',
                200: '#B39DDB',
                main: '#673AB7',
                dark: '#5E35B1',
                800: '#4527A0',
            },
        },
    });
}
export default StyledComponent;