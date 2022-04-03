import React from 'react';

import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';

import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        history.push('login')
    }

    return (

        <>
            <AppBar position="static" className='barra'>
                <Toolbar variant="dense">
                    <Link to='/home' className='text-decarator-none'>
                        <Box className='cursor'>
                            <Typography variant="h5" className='navBarFont'>
                                BlogPessoal
                            </Typography>
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">

                        <Link to='/postagens' className='text-decarator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navBarFont'>
                                    postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decarator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navBarFont'>
                                    temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decarator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navBarFont'>
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor text-decarator-none' onClick={goLogout}>
                            <Typography variant="h6" className='navBarFont'>
                                logout
                            </Typography>
                        </Box>





                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar; 