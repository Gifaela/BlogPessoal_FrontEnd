import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")//verificar o valor digitádo no campo confirmirar senha é igua ao valor do cadastrar senha
    const [user, setUser] = useState<User>(//contem as informações que irei enviar para cadastro
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(//responsaver por armazenar os valores do retorno da API. é gravado dentro do userResult
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => { //no momento que eu efetuar o cadastro, o usuário já estiver cadastrado encaminhe o usuário para a página de login
        if (userResult.id !== 0) { // se for diferente de zero, a gente inicializa ele com zero, se for diferente, significa que já existe algum valor cadastrado, indica que o cadastro foi finalizado com sucesso.
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {// Vai capturar o valor digitado no campo confirmar senha e armazeno no setConfirmarSenha
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {//confirma a senha
        e.preventDefault()//não deixa atualizar a tela

        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                //alert('Usuário cadastrado com sucesso')
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right", // localização da notificação 
                    autoClose: 2000,//em que momento que essa notificação deve sumir 2000 mili segundos 
                    hideProgressBar: false, //Se eu devo ou não ocultar a barrinha de proguresso(false mostra a barrinha).
                    closeOnClick: true, // Se clicar o alerta some(false permanece ao clicar)
                    pauseOnFocusLoss: false, //Pausa quando passa o mouse na notificação (false, não para, após os 2 segundos ela some )
                    draggable: false, //Opção de moder a barrinha de notificação (false não deixa mover)
                    theme: 'colored',
                    progress: undefined,
                });

            } catch (error) {
                console.log(`Error:${error}`)

               // alert('Usuário já existentes!')
                toast.error('Usuário já existentes!', {
                    position: "top-right", // localização da notificação 
                    autoClose: 2000,//em que momento que essa notificação deve sumir 2000 mili segundos 
                    hideProgressBar: false, //Se eu devo ou não ocultar a barrinha de proguresso(false mostra a barrinha).
                    closeOnClick: true, // Se clicar o alerta some(false permanece ao clicar)
                    pauseOnFocusLoss: false, //Pausa quando passa o mouse na notificação (false, não para, após os 2 segundos ela some )
                    draggable: false, //Opção de moder a barrinha de notificação (false não deixa mover)
                    theme: 'colored',
                    progress: undefined,
                });

                setUser({ ...user, senha: '' })/*não emtendi  */
                setConfirmarSenha('') /*não emtendi  */
            }

        } else {
          // alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!.', {
                position: "top-right", // localização da notificação 
                autoClose: 2000,//em que momento que essa notificação deve sumir 2000 mili segundos 
                hideProgressBar: false, //Se eu devo ou não ocultar a barrinha de proguresso(false mostra a barrinha).
                closeOnClick: true, // Se clicar o alerta some(false permanece ao clicar)
                pauseOnFocusLoss: false, //Pausa quando passa o mouse na notificação (false, não para, após os 2 segundos ela some )
                draggable: false, //Opção de moder a barrinha de notificação (false não deixa mover)
                theme: 'colored',
                progress: undefined,
            });
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imgMickeyCadastroLogin'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>

                        <Typography
                            variant='h3'
                            gutterBottom color='inherit'
                            component='h3'
                            align='center'
                            className='textosCadastro'>
                            Cadastrar
                        </Typography>

                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome'
                            label='nome'
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            required
                            className='' />

                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            type='email'
                            id='usuario'
                            label='usuario'
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            required
                            className='' />

                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            value={user.senha}
                            id='senha'
                            label='senha'
                            variant='outlined'
                            name='senha'
                            margin='normal' type='password'
                            fullWidth required />


                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmarSenha'
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            required
                            className='' />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login'>
                                {/* type submit - invia as informações / variante tem preenchimento de=a cor*/}
                                <Button variant="outlined" color='inherit' className='botaoCadastroCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            {/* type submit - invia as informações / variante tem preenchimento de=a cor*/}
                            <Button type='submit' variant='contained' color='primary' className='botaoCadastroCadastro'>
                                Cadastrar
                            </Button>

                        </Box>
                    </form>
                </Box>
            </Grid>



        </Grid>
    );
}

export default CadastroUsuario;