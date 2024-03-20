//importaciones de react
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import TableSelected from "../../Components/ComponentUI/Datatable/TableSelected";

const columns = [
    { id: 'nombre', numeric: false, disablePadding: true, label: 'Nombre' },
    { id: 'modelo', numeric: false, disablePadding: false, label: 'Modelo' },
    { id: 'descripcion', numeric: false, disablePadding: false, label: 'descripcion' },
    { id: 'precio', numeric: true, disablePadding: false, label: 'precio' },
    { id: 'stock', numeric: true, disablePadding: false, label: 'stock' },
];

const productosManagment = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/Products', {
                    method: 'GET',
                    credentials: 'include', // Añade esta línea
                });
                if (response.status === 401) {
                    // Manejo de error de autenticación aquí
                    console.error('Error de autenticación:', response.statusText);
                    return;
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            <Container sx={{mt:15}}>
                {/* <h1>Hola</h1> */}
                <TableSelected data={data} columns={columns}/>
            </Container>
        </>
    );
}
export default productosManagment;