import React, { useEffect } from 'react';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {

    let history = useHistory();

    const [token, setToken] = useLocalStorage('token');

    useEffect(()=>{
        if(token === ''){
            alert('Você precisa estar logado!')
            history.push('/login')
        }
    },[token])
    


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
                                <ModalPostagem/>
                            </Box>
                            <Button variant="outlined" color="inherit" className='botaoVerPostagem'>Ver Postagens</Button>
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

