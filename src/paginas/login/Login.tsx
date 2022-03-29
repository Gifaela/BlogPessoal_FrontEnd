import React, {useState, useEffect, ChangeEvent}from 'react';

import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

import './Login.css';


function Login(){

    let history =useHistory()
    const [token, setToken]=useLocalStorage('token');
    const [userLogin,setUserLogin] = useState<UserLogin>(
        {
            id:0,
            nome:'',
            usuario:'',
            senha:'',
            foto:'',
            token:''

        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if(token != ''){
                history.push('/home')
            }
        }, [token])


        async function onSubmit(e: ChangeEvent<HTMLFormElement>) { //responsavel por enviar os dados da requisição(dados de Login do usuário)
            e.preventDefault(); //previnindo comportamento padão do botão impedindo que ele atualize a tela

           // console.log('userLogin: ' + Object.values(userLogin)); //verifica se os dados que estão dentro de user login estão corretos.

          try{
              await login(`/usuarios/logar`, userLogin, setToken)  
            /*método de login que por padrão ja me trás o endereçode api imbitido dentro dele, 
            concateno com a rota para fazer login, passo os dados dessa rota (userLogin), pego o token e gravo no 
            Logar Storage.*/

              alert('Usuário logado com sucesso!')

          }catch(erro){
              alert('Dados do usuário inconsistentes. Erro ao logar!')

          } 
        }
    
    return(
        <Grid container direction ='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        {/*Typography = tipo de fonte / gutterBottom = Botão / cor padrão / h3 / alinhamento é no centro / bold é negrito                       */}
                        <Typography variant ='h3' gutterBottom color = 'textPrimary' component='h3' align = 'center' className='textosLogin'>Entrar</Typography>
                        {/*TexField = campo de texto (value capturar o valor digitado no campo)/(onChange - aciona a função upDateModel) / id / label = rótulo / variante não tem preenchimento, tem apenas borda/ nome / margem normal / fullWidth = indica que vai ocupar toda a largura do componete */}
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />                        <Box marginTop={2} textAlign='center'>
                 
                            {/* type submit - invia as informações / variante tem preenchimento de=a cor*/}
                            <Button type='submit' variant='contained'color='primary' className='botaoLogin'>
                                Logar
                            </Button>
                         
                        </Box>                      
                    </form>
                    <Box display='flex'justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to = '/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textosLogin'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imgMickeyLogin'>
            
            </Grid> 
        </Grid>
)}
export default Login;

/*<Grid xs={6} style={{
    backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
*/