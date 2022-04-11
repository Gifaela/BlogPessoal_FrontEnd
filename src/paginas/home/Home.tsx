import React, { useEffect } from 'react';
import { Grid, Button, Typography, Box } from '@material-ui/core';

import './Home.css';

import { Link, useHistory } from 'react-router-dom';
//import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {

    let history = useHistory();

    //const [token, setToken] = useLocalStorage('token');
    // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token === '') {
           // alert('Você precisa estar logado!')
            toast.info('Você precisa estar logado!',{
                position:"top-right", // localização da notificação 
                autoClose: 2000,//em que momento que essa notificação deve sumir 2000 mili segundos 
                hideProgressBar: false, //Se eu devo ou não ocultar a barrinha de proguresso(false mostra a barrinha).
                closeOnClick: true, // Se clicar o alerta some(false permanece ao clicar)
                pauseOnFocusLoss: false, //Pausa quando passa o mouse na notificação (false, não para, após os 2 segundos ela some )
                draggable: false, //Opção de moder a barrinha de notificação (false não deixa mover)
                theme: 'colored',
                progress: undefined,
            });
            history.push('/login')
        }
    }, [token])



    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item container className='back'>

                    <Grid item xs={6} alignItems="center" justifyContent="flex-end">

                        <Box paddingX={20} paddingTop={20} alignItems="center" justifyContent="center"> {/*Impossibilita o justifyContent*/}
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                                className='tituloHome'>Bem vindo(a) ao tenebroso mundo da Disney!</Typography>

                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center"
                                className='tituloHome'>expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>

                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Link to='/postagens'>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    className='botaoVerPostagem'>
                                    Ver Postagens
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6} container direction="row" justifyContent="center" alignItems="center">
                        {/* <img src="http://2.bp.blogspot.com/-0xvR1KlV-Gg/VcVWD7OMbHI/AAAAAAAAQL0/OFqUeQntKJ4/s1600/princesas-com-pr%25C3%25ADncipes-disney-png-by-bauzinhodaweb.png"
                            alt="" width='200px' height='200px' /> */}
                    </Grid>
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>

            </Grid>
        </>

    );
}

export default Home;

