import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import cavity from './../../../images/cavity.png'
import fluoride from './../../../images/fluoride.png'
import whitening from './../../../images/whitening.png'


const services = [
    {
        name: 'Cavity Filling',
        description: 'lorem ipsum dolar sit amet consectetur adipsicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusentium etaque ducimus rem voluptus',
        img: cavity
    },
    {
        name: 'Fluoride Treatment',
        description: 'lorem ipsum dolar sit amet consectetur adipsicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusentium etaque ducimus rem voluptus',
        img: fluoride
    },
    {
        name: 'Teeth Whitening',
        description: 'lorem ipsum dolar sit amet consectetur adipsicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusentium etaque ducimus rem voluptus',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;