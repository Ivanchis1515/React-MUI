//importacion de react
import React from 'react';
import { Typography, Card, CardContent, CardMedia, Container, Avatar, Rating, Box, Grid } from '@mui/material';

//carrusel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//libreria de diseño MUI
import { useTheme } from '@mui/material/styles';

//importaciones de iconos
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const ImageCarousel = ({productsCarrusel}) => {
    const theme = useTheme();
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Box>
                <Slider {...sliderSettings}>
                    {productsCarrusel.map((offer, index) => (
                        <Grid key={index} container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={offer.image}
                                        alt={offer.title}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar>
                                                <PersonIcon />
                                                </Avatar>
                                                <Box sx={{marginLeft:2}}>
                                                    {offer.name}
                                                </Box>
                                            </Box>
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            {offer.testimonial}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                            <Typography variant="body2" color="textSecondary" style={{ marginLeft: '8px' }}>
                                                {offer.recommendations}
                                            </Typography>
                                            <Box sx={{ marginLeft: '8px' }}>
                                                <Rating
                                                value={offer.rating}
                                                precision={0.5}
                                                readOnly
                                                emptyIcon={<StarIcon style={{ opacity: 0.55, color: theme.palette.primary.main }} />}
                                                icon={<StarIcon style={{ color: theme.palette.primary.main }} />}
                                            />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    ))}
                </Slider>
            </Box>
        </>
    );
};
export default ImageCarousel;