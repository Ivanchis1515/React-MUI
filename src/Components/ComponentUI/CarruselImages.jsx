//importacion de react
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Card, CardContent, CardMedia, Container, Avatar, Rating, Box } from '@mui/material';
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
            <Slider {...sliderSettings}>
                {productsCarrusel.map((offer, index) => (
                    <Container key={index} style={{ padding: '16px' }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300"
                                image={offer.image}
                                alt={offer.title}
                                style={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    <Avatar>
                                        <PersonIcon />
                                    </Avatar>
                                    {offer.name}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {offer.testimonial}
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
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
                    </Container>
                ))}
            </Slider>

        </>
    );
};
export default ImageCarousel;
