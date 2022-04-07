import React from 'react';

import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

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
        //alert('Usuário deslogado!')
        toast.info('Usuário deslogado!',{
            position:"top-right", // localização da notificação 
            autoClose: 2000,//em que momento que essa notificação deve sumir 2000 mili segundos 
            hideProgressBar: false, //Se eu devo ou não ocultar a barrinha de proguresso(false mostra a barrinha).
            closeOnClick: true, // Se clicar o alerta some(false permanece ao clicar)
            pauseOnFocusLoss: false, //Pausa quando passa o mouse na notificação (false, não para, após os 2 segundos ela some )
            draggable: false, //Opção de moder a barrinha de notificação (false não deixa mover)
            theme: 'colored',
            progress: undefined,
        });
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