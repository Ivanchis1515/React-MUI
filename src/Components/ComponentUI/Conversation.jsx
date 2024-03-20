// ChatComponent.js
import React, { useState, useEffect } from 'react';

// //importacion del socket
import io from 'socket.io-client';

//importaciones de MUI
import { TextField, Typography, Grid, IconButton, Card, CardHeader, CardContent, Button } from '@mui/material'; 

//importacion de paleta de colores
import { useTheme } from '@mui/material/styles';

//iconos
import AssistantIcon from '@mui/icons-material/Assistant';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Close as CloseIcon } from '@mui/icons-material';
import fondo_chat from '../../assets/fondo_chat.svg';

const ChatComponent = () => {
    const theme = useTheme(); //ibten los temas actuales del sistema
    const [chatVisible, setChatVisible] = useState(false); //cstado para controlar la visibilidad del chat
    const [messages, setMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState(''); //mesaje para enviar
    const [socket, setSocket] = useState(null); //estado para el socket

    const handleToggleChat = () => {
        setChatVisible(!chatVisible);
    };

    useEffect(() => {
        const socketInstance = io('http://localhost:3000'); //URL escucha del servidor websocket

        socketInstance.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]); //escucha los mensajes entrantes y actualiza el estado
        });

        setSocket(socketInstance);

        return () => {
            if (socketInstance) {
                socketInstance.disconnect();
            }
        };
    }, []); //ejecuta una sola vez al montar el componente

    const handleSendMessage = (e) => {
        e.preventDefault(); //evita que el formulario se envíe y la página se recargue
        if (socket && messageToSend.trim() !== '') { //verifica que el mensaje no esté vacío
            socket.emit('message', messageToSend);
            // Agrega el mensaje enviado al estado para que se muestre en el chat
            setMessages([...messages, { text: messageToSend, sender: 'user' }]);
            setMessageToSend(''); // Limpiar el campo de entrada después de enviar el mensaje
            // Simula la respuesta del servidor agregando un mensaje con el icono SmartToy
            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, { text: 'Respuesta del Bot', sender: 'bot' }]);
            }, 1000);
        }
    };

    return (
        <>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <IconButton
                        onClick={handleToggleChat}
                        sx={{ 
                            position: 'fixed',
                            bottom: 20,
                            right: 20,
                            width: '55px',
                            height: '55px',
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            color:theme.palette.primary.contrastText,
                            padding: chatVisible ? '18px' : '18px',
                            boxShadow:'0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                            zIndex: 9999
                        }}
                    >
                        {chatVisible ? <CloseIcon /> : <AssistantIcon />}
                    </IconButton>
                </Grid>
            </Grid>

            {/* Tarjeta del chat */}
            {chatVisible && (
                <Card
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        right: 10,
                        width: 350,
                        maxWidth: '85vw',
                        maxHeight: '100vh',
                        boxShadow: '0px 5px 35px 9px #ccc',
                        zIndex: 9999,
                        backgroundColor:'#efefef'
                    }}
                >
                    <CardHeader
                        title="ChatBot"
                        sx={{ 
                            backgroundColor: theme.palette.primary.main, 
                            color: theme.palette.primary.contrastText,
                            textAlign: 'center', 
                            fontSize: '20px', 
                            paddingTop: '17px', 
                            borderTopLeftRadius: '5px', 
                            borderTopRightRadius: '5px' 
                        }}
                        action={
                            <IconButton onClick={handleToggleChat}>
                                <CloseIcon />
                            </IconButton>
                        }
                    />
                    <CardContent 
                        sx={{ 
                            padding: '10px', 
                            // overflowY: 'scroll', 
                            height: '370px',
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5)), url(${fondo_chat})`, //opacidad a la imagen de fondo
                            backgroundPosition: 'center', //centra la imagen de fondo
                            position: 'relative', //posiciona el contenido encima de la imagen de fondo
                        }}
                    >
                        {messages.map((message, index) => (
                            <Grid key={index} container justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
                                <Grid item>
                                    <Typography>
                                        {message.sender === 'bot' && <SmartToyIcon />} {/* Agrega el icono SmartToy solo para mensajes del bot */}
                                        {message.text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </CardContent>
                    <CardContent>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={9}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="message"
                                    label="Enviar mensaje"
                                    type="text"
                                    fullWidth
                                    value={messageToSend}
                                    onChange={(e) => setMessageToSend(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button onClick={handleSendMessage} color="primary" variant="contained">
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default ChatComponent;