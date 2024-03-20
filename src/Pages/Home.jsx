//importaciones de react
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button, Box, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';

//importacion de libreria de diseño
import { styled } from "@mui/system";

//RECURSOS
import CustomCard from "../Components/ComponentUI/CustomCard";
import ReusableProductCard from "../Components/ComponentUI/CardProduct";
import ImageCarousel from "../Components/ComponentUI/CarruselImages";
import BrandImages from "../Components/ComponentUI/BrandImages";
import TestimonialData from '../Components/ComponentUI/testimonialData';
import OfferImages from '../Components/ComponentUI/OfferImages';

//importacion de animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

//importacion de iconos
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import security from "../assets/security.svg";
import health from '../assets/health.svg';
import Smile from '../assets/smile.svg';
import logo from '../assets/Powertech.png';
import samsung from "../assets/samsung.svg";
import lenovo from "../assets/lenovo.svg";
import iphone from "../assets/apple.svg";

//informacion para cargar en la carta de caracteristicas dinamicamente
const featuresData = [
  {
    title: 'Seguro',
    description: 'Seguridad en la transacciones de nuestras compras',
    icon: security,
  },
  {
    title: 'Soporte especializado',
    description: '6 meses de soporte técnico gratuito para ayudarle en lo que necesite.',
    icon: health,
  },
  {
    title: 'Satisfacción garantizada',
    description: 'Tenemos acompañamiento desde que lo ve hasta que lo tiene en sus manos',
    icon: Smile,
  },
];
//array que tiene contenido de los productos
const products = [
  {
    image: 'https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/4:3/w_712,h_534,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg',
    title: 'Computadoras',
    description: 'Un computador o laptop es un equipo personal que puede ser transportado fácilmente.' +
    ' Muchos de ellos están diseñados para soportar software y archivos igual de robustos a los que procesa un computador de escritorio.',
    to: '/catalog/computadoras'
  },
  {
    image: 'https://d500.epimg.net/cincodias/imagenes/2020/11/16/lifestyle/1605555641_363320_1605556525_noticia_normal.jpg',
    title: 'Telefonía',
    description: 'Los Smartphones, o teléfonos inteligentes, son pequeños dispositivos que integran funcionalidades de teléfono móvil' +
    ' con las funcionalidades más comunes de un PDA (asistente digital personal), además permiten a los usuarios almacenar información, ' +
    'enviar y recibir mensajes, E-mail e instalar programas.',
    to: '/catalog/telefonos-moviles'
  },
  {
    image: 'https://www.shutterstock.com/image-photo/gadgets-accessories-isolated-on-white-600nw-1248412693.jpg',
    title: 'Accesorios',
    description: 'Se suele llamar accesorio a todo aquel elemento que forma parte de un sistema o de una máquina, '+
    'una vez definida esta como producto o subproducto básico. Sirve para que la misma ejecute o no la función para la que se prepara.',
    to: '/catalog/accesorios'
  },
  {
    image: 'https://lh4.googleusercontent.com/dIVS3FgXFy56vXsMvLR0KDlE6RB5RB5AEEvjrP280E4nQwGVdJdqUYSphe0mAUpuP2eFR6Q1MN3MHES4EBZxD-gZbyyglrlGJ_A0v-K12Jpk_V5Kvn56IxHnidHfCYdKfLR74Qne=s0',
    title: 'Camaras y fotografía',
    description: 'La cámara es un dispositivo parecido a una caja oscura, que es capaz de crear imágenes dejando' +
    ' pasar la luz el tiempo preciso para que un sensor digital o una película puedan registrar los rayos de luz' +
    ' procedentes del entorno y de los objetos, para finalmente, convertirlos en una imagen nítida.',
    to: '/catalog/camaras-y-fotografia'
  },
  {
    image: 'https://imagenes.razon.com.mx/files/image_940_470/uploads/2021/05/17/60a31ac975d04.png',
    title: 'Audio y Video',
    description: 'Los artículos de audio y video actualmente son elementos indispensables en nuestra vida diaria.' +
    ' Los usamos en nuestros hogares, cuando estamos de viaje, en la escuela y en el trabajo, prácticamente en todo momento.',
    to: '/catalog/audio-y-video'
  },
  {
    image: 'https://www.elfinanciero.com.mx/resizer/qoY09W_IR_n_NuVcvltway9xdLo=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/KY6U3WCR5BC35LMGZ3BK5TZ7NM.jpeg',
    title: 'Juegos y consolas',
    description: 'Los gamers de verdad no solamente son fanáticos de los videojuegos.' +
    ' También son grandes conocedores de la tecnología en entretenimiento más actual y de todo lo relacionado con sus consolas y juegos favoritos.'
    + ' Los gamers de corazón invierten en los mejores accesorios para hacer su experiencia de juego mucho más divertida e inmersiva.',
    to: '/catalog/juegos-y-consolas'
  },
];
//ofertas disponibles array
const productsCarrusel = [
  {
    id: 1,
    name: 'Nombre del Producto 1',
    image: 'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/43fb4c36-cd92-46ff-8047-2500160aa66f___286303b9a2e45eac03d1641a5f702816.png',
    name: 'Leonardo',
    testimonial: '¡Este producto es increíble! Lo uso todos los días.',
    rating:5,
    recommendations:"Este es un gran producto pero hay que saber escoger"
  },
  {
    id: 2,
    name: 'Nombre del Producto 2',
    image: 'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/e3d5a519-7b0c-4b09-b953-4b8797787e69___47e080d08b9dde4b597e4bd15d6e21a7.png',
    testimonial: 'Nunca pensé que un producto podría hacer tanto.',
    author: 'Cliente Feliz 2',
  },
];
//array con las ofertas del diaria
const offerImages = [
  'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/1b65f23e-0d7f-46c2-bc45-3dbc29e6e6cb___78d4feec9015b3316579e7cf42cef4b4.png',
  'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/c8d17ed6-a3cd-4694-984c-cf79f8d29207___7bfab8f485b0bba1aa3aa37da4746876.png',
  'https://doto.vtexassets.com/assets/vtex.file-manager-graphql/images/678d9d89-6011-46b6-b178-b0b9af38cf87___cf0a2e777b54af8b8e70b1943abf74c4.png'
]
//array con los logos
const brandLogos = [
  {
    name: "Samsung",
    logo: samsung
  },
  {
    name: "Lenovo",
    logo: lenovo
  },
  {
    name: "Iphone",
    logo: iphone
  },
];
//array con los testimonios de personas
const testimonial = [
  {
    name: 'Jose Angel Luna Sedeño',
    ocupation: 'Desarrollador',
    recommendations: 'Me encanta la aplicación para obtener reembolsos en efectivo, puntos de recompensa y protección contra fraude, tal como cuando pasas tu tarjeta.',
    rating: 3.5,
  },
  {
    name: 'Arlet Perez',
    ocupation: 'Desarrolladora',
    recommendations: '¡Comprar con Power es fantástico!. Componentes simples y claros, todo en una sola plataforma.',
    rating: 5,
  },
];

//creacion del nuevo modulo de imagen
const Img = styled("img")({
  width:50,
  height:"100%",
  objectFit:"cover",
  objectPosition:"center"
});

const HeroSection = styled('div')({
  textAlign: 'center',
  padding: '50px 0',
  backgroundColor: '#FFFFF',
});

const HeroContent = styled('div')({
  zIndex: 1,
});

const Home = () => {
  const theme = useTheme();
  useEffect(() => {
    return () => {
      AOS.init({ once: true });
    };
  }, []);

  return (
    <>
      <Box sx={{p:0}}>  
        <HeroSection>
          <Container>
            <Grid container spacing={2}>
              {/* Columna para la imagen */}
              <Grid item xs={12} md={6} data-aos="fade-right">
                <div className="image-container">
                  <Img src={logo} alt="Logo" style={{ width: '50%', height: '50%' }} />
                </div>
              </Grid>

              {/* Columna para el contenido original */}
              <Grid item xs={12} md={6} data-aos="fade-right">
                <HeroContent>
                  <Typography variant="h2" gutterBottom>
                    Convierte tus deseos
                    <br />
                    en 
                    <span style={{ color: theme.palette.primary.main }}> realidad.</span>
                  </Typography>
                  {/* Borrar */}
                  <Typography variant="h6"> 
                    Nosotros haremos que encuentre su producto ideal, mientras usted
                    ahorra su preciado tiempo.
                  </Typography>
                  {/*  */}
                  <Button variant="contained" color="primary">
                    Comprar ahora
                    <ArrowRightAltIcon />
                  </Button>
                </HeroContent>
              </Grid>
            </Grid>
          </Container>
        </HeroSection>
      </Box>

      <Box sx={{mt:10}}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
          Ofertas del día
        </Typography>
        {/* Grid para colocar el carrusel y las imágenes de ofertas en fila */}
        {/* Carrusel */}
        <Grid item xs={12} md={6}>
          <ImageCarousel productsCarrusel={productsCarrusel} />
        </Grid>

        {/* Imágenes de ofertas del día */}
        <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 5 }}>
          <OfferImages offerImages={offerImages} />
        </Grid>
      </Box>

      <Container>
        <Box sx={{mt:10}}>
        {/* Seccion de prodcutos */}
          <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
            Conoce nuestras categorías
          </Typography>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <ReusableProductCard key={index} {...product} />
            ))}
          </Grid>
        </Box>

        <Box sx={{mt:10}}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.primary.main }}> 
            Aquí encontrarás.
          </Typography>
          <BrandImages brandLogos={brandLogos} />
        </Box>

        <Box sx={{mt:10}}>
          <Grid container spacing={4}>
            {/* Lado Izquierdo (Usando Paper para el estilo del contenedor) */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: '2.5rem', whiteSpace: 'pre-line' }}>
                  Amado por empresas e individuos{'\n'}de todo el mundo.
                </Typography>
              </Box>
              <Box sx={{mt:2}}>
                <Typography variant="h6" sx={{whiteSpace: 'pre-line'}}>
                  {/* Diseñamos y desarrollamos sitios web y productos digitales increíbles{'\n'}para startups, empresas y para nosotros mismos. */}
                  Nos esforzamos por brindar calidad en todos nuestros servicios y ofrecemos{'\n'}una amplia variedad de categorías, desde celulares hasta consolas y gadgets, a precios competitivos.
                </Typography>
              </Box>
            </Grid>

            {/* Lado Derecho (Testimonio) */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 5 }}>
                <Typography variant="h4" align="center" gutterBottom color="primary">
                  Lo que dicen nuestros clientes.
                </Typography>
                <TestimonialData testimonial={testimonial} />
                {/* Otros elementos en tu componente principal */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      
        <Box sx={{mt:10}}>
          {/* Sección de Características */}
            <Grid container spacing={2} justify="center"  alignItems="center">
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h4" align="center" gutterBottom style={{ color: theme.palette.primary.main }}>
                  Características
                </Typography>
                <Typography variant="h3" align="center" gutterBottom>
                  El sitio 
                  <span style={{ color: theme.palette.primary.main }}> flexible</span> 
                  <br /> para todo tipo de negocios.
                </Typography>
                <Typography variant="h6" align="center">
                  Aqui encontrará todo tipo de articulos para todas las necesidades
                  <br /> Al alcance de un click.
                </Typography>
                <Typography align="center">
                  <Button variant="contained" color="primary" size="large">
                    Comprar ahora
                  </Button>
                </Typography>
                <Box sx={{mt:10}}>
                  <CustomCard featuresData={featuresData} />
                </Box>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
