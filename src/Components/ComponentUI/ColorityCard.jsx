//importaciones de React
import { useState } from 'react';
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//recursos
import MainCard from './MainCard';

//iconos
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.spacing(3), // Ajusta el valor según lo que desees
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

const EarningCard = ({modulos}) => {
    const theme = useTheme(); //tema de la paleta de colores

    const [anchorEl, setAnchorEl] = useState(null); //habilita el menu de la tarjeta

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Grid container spacing={3}>
                {
                    modulos.map((modulo, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <CardWrapper border={false} content={false} sx={{mt:5}}>
                                <Box sx={{ p: 2.25 }}>
                                    <Grid container direction="column" item xs={12}>
                                        <Grid item>
                                            <Grid container justifyContent="space-between">
                                                <Grid item>
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            backgroundColor: theme.palette.secondary[800],
                                                            mt: 1
                                                        }}
                                                    >
                                                        {modulo.icono}
                                                    </Avatar>
                                                </Grid>
                                                <Grid item>
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            backgroundColor: theme.palette.secondary.dark,
                                                            color: theme.palette.secondary[200],
                                                            zIndex: 1
                                                        }}
                                                        aria-controls="menu-earning-card"
                                                        aria-haspopup="true"
                                                        onClick={handleClick}
                                                    >
                                                        <MoreHorizIcon fontSize="inherit" />
                                                    </Avatar>
                                                    <Menu
                                                        id={`menu-earning-card-${index}`}
                                                        anchorEl={anchorEl}
                                                        keepMounted
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                        variant="selectedMenu"
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'right'
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right'
                                                        }}
                                                    >
                                                        <MenuItem onClick={handleClose}>
                                                            <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
                                                        </MenuItem>
                                                    </Menu>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        {modulo.nombre}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link to="/Dashboard/Productos">
                                                        <Avatar
                                                            sx={{
                                                                backgroundColor: theme.palette.secondary[200],
                                                                color: theme.palette.secondary.dark
                                                            }}
                                                        >
                                                            <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                                                        </Avatar>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ mb: 1.25 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '1rem',
                                                    fontWeight: 500,
                                                    color: theme.palette.secondary[200]
                                                }}
                                            >
                                                {modulo.subtitulo}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardWrapper>
                        </Grid>
                    ))  
                }
            </Grid>
        </>
    );
};
export default EarningCard;