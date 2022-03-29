import React from 'react';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaHome'>
                <Grid item xs={6} alignItems="center" justifyContent="flex-end" >

                    <Box paddingX={20} > {/*Impossibilita o justifyContent*/}
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                            className='titulo'>Bem vindo(a) ao tenebroso mundo da Disney!</Typography>

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center"
                            className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botaoVerPostagem'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} container direction="row" justifyContent="center" alignItems="center">
                    <img src="http://2.bp.blogspot.com/-0xvR1KlV-Gg/VcVWD7OMbHI/AAAAAAAAQL0/OFqUeQntKJ4/s1600/princesas-com-pr%25C3%25ADncipes-disney-png-by-bauzinhodaweb.png"
                        alt="" width='200px' height='200px' />
                </Grid>
                <Grid xs={12} className='postagens'>

                </Grid>
            </Grid>
        </>

    );
}

export default Home;

