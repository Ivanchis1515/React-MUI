//importaciones de React
import React from 'react';
import './Error404.css'; // Importa el archivo de estilos

const ErrorPage = ({ errorCode }) => {
    const generateRandomPosition = () => {
        return {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        };
    };
    const stars = Array.from({ length: 100 }, (_, index) => (
        <div
            key={index}
            className="star"
            style={generateRandomPosition()}
        ></div>
    ));

    let errorMessage, errorText;
    if (errorCode === 404) {
        errorMessage = "Error 404";
        errorText = "Parece que estás perdido en el espacio.";
    } else if (errorCode === 500) {
        errorMessage = "Error 500";
        errorText = "¡Ups! Algo salió mal en el servidor.";
    } else {
        errorMessage = "Error";
        errorText = "Ocurrió un error inesperado.";
    }
    return(
        <>
            <div className="error-container">
                {/* Astronauta */}
                <div className="astronaut"></div>
                {/* Estrellas */}
                {stars}
                {/* Planeta Tierra y Luna */}
                <div className="earth">
                    {/* Marcadores de continentes */}
                    <div className="continent north-america"></div>
                    <div className="continent south-america"></div>
                    <div className="continent europe"></div>
                    <div className="continent africa"></div>
                    <div className="continent asia"></div>
                    <div className="continent australia"></div>
                </div>
                <div className="moon"></div>
                {/* Texto de error */}
                <div className="text-container">
                    <h1>{errorMessage}</h1>
                    <p>{errorText}</p>
                </div>
            </div>
        </>
    );
}
export default ErrorPage;