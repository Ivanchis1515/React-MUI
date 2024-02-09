import React from 'react';
import { Grid, Paper, Avatar, Typography } from '@mui/material';
//importacion de libreria de diseño
import { styled } from "@mui/system";

//creacion del nuevo modulo de imagen
const Img = styled("img")({
    width:"70%",
    height:"70%",
    objectFit:"cover",
    objectPosition:"center"
});
//FUNCIONES DE ANIMACION
const CardPersonality = styled(Paper)({
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    },
});  
const AvatarWrapper = styled(Avatar)({
  backgroundColor: '#1976D2',
});

const CustomCard = ({featuresData}) => {
    return (
        <>
            <Grid container spacing={4}>
                {featuresData.map((feature, index) =>(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardPersonality elevation={1} data-aos="fade-up">
                            <AvatarWrapper>
                                <Img src={feature.icon} alt={feature.title} />
                            </AvatarWrapper>
                            <Typography variant="h6" gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography variant="body1">
                                {feature.description}
                            </Typography>
                        </CardPersonality>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};
export default CustomCard;
