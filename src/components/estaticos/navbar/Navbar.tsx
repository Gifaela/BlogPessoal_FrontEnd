import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import React from 'react';

import './Navbar.css'

function Navbar() {
    return (

        <>
            <AppBar position="static" className='barra'>
                <Toolbar variant="dense">
                <Link to='/home'>
                    <Box className='cursor'>
                        <Typography variant="h5" className='navBarFont'>
                            BlogPessoal
                        </Typography>
                    </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">
                        
                        <Link to='/postagens'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='navBarFont'>
                                temas
                            </Typography>
                        </Box>
                        </Link>
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