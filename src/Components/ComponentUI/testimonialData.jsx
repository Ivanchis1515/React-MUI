//importaciones de react
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';

//carrusel
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//libreria de diseño MUI
import { useTheme } from '@mui/material/styles';

//iconos
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

const testimonialData = ({testimonial}) => {
    const theme = useTheme();
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <>
            <Slider {...sliderSettings}>
                {testimonial.map((item, index) => (
                    <Card key={index} style={{ marginBottom: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar>
                                        <PersonIcon /> 
                                    </Avatar>
                                    <Box sx={{marginLeft:2, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant='span'>{item.name}</Typography>
                                        <Typography variant='body1' color="primary">Ocupación: {item.ocupation}</Typography>
                                    </Box>
                                </Box>
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {item.testimonial}
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
                                <Typography variant="body2" color="textSecondary" style={{ marginLeft: '8px' }}>
                                    {item.recommendations}
                                </Typography>
                            </Box>
                            <Box sx={{ marginLeft: '8px' }}>
                                <Rating
                                    value={item.rating}
                                    precision={0.5}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: theme.palette.primary.main }} />}
                                    icon={<StarIcon style={{ color: theme.palette.primary.main }} />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </>
    );
}
export default testimonialData;