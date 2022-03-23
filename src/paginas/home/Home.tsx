import React from 'react';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Home.css';

function Home() {
    return (
        <>
            <Grid container className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                            style={{ color: "white", fontWeight: "bold" }}>Bem vindo(a) ao tenebroso mundo da Disney!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center"
                            style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B500", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} className='prin'>
                    <img src="http://2.bp.blogspot.com/-0xvR1KlV-Gg/VcVWD7OMbHI/AAAAAAAAQL0/OFqUeQntKJ4/s1600/princesas-com-pr%25C3%25ADncipes-disney-png-by-bauzinhodaweb.png" alt="" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>

    );
}

export default Home;