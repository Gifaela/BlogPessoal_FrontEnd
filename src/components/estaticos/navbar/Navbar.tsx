import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';

import './Navbar.css'

function Navbar() {
    return (

        <>
            <AppBar position="static" className='barra'>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" className='navBarFont'>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decarator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navBarFont'>
                                    logout
                                </Typography>
                            </Box>
                        </Link>




                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar; 