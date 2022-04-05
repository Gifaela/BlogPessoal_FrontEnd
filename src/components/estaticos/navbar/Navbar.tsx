import React from 'react';

import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
//import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    let history = useHistory();
    //const [token, setToken] = useLocalStorage('token');
    // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))// adicionando um token vazio, para deslogar 
        alert('Usuário deslogado!')
        history.push('login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent =
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

    }

    return (

        <>
            {navbarComponent}
        </>
    )
}

export default Navbar; 