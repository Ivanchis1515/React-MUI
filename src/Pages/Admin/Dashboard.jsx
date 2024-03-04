//importaciones de react
import React from "react";
import { Container, Grid } from "@mui/material";

//recursos
import ColorityCard from "../../Components/ComponentUI/ColorityCard";

//iconos
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

//modulos
const modulos = [
    {
        nombre: "Productos",
        subtitulo: "Altas, bajas, consulta de productos",
        icono: <LocalMallIcon />
    },
    {
        nombre: "Marcas",
        subtitulo: "Registrar marcas",
        icono: <LibraryAddIcon />
    }
]

const Dashboard = () => {
    return(
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <ColorityCard modulos={modulos}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default Dashboard;