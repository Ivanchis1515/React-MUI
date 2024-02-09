//importaciones de react
import React from 'react';
import { Box } from "@mui/system";
import { IconButton } from '@mui/material';

//iconos
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ColorPickerIndicator = ({ handleColorChange, handleToggleDarkMode, darkMode, colors }) => {
    const selectColor = (color) => {
        handleColorChange(color);
    }

    return(
        <>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                {
                    colors.map((color, index) => (
                        <Box
                            key={index}
                            onClick={() => selectColor(color)}
                            sx={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                cursor: 'pointer',
                                border: 2,
                                borderStyle:"solid",
                            }} />
                    ))
                }
            </Box>
            <IconButton onClick={handleToggleDarkMode}>
                {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
        </>
    );
}
export default ColorPickerIndicator;