import React from 'react';

import {Grid, Typography, Box} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={12}>
                    <Box className='corPe'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/giulia.rafa.dias/" target="_blank">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/heey_giulia/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/giulia-potenza/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box className='corPe2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} ><u>© 2022 Copyright:</u></Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/Gifaela">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} align="center">github</Typography>
                            </a>
                        </Box>
                        
                    </Box>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Footer; 