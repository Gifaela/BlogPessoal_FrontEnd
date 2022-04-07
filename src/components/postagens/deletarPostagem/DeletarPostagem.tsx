import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
//import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {

  let history = useHistory()

  const { id } = useParams<{ id: string }>();

  // const [token, setToken] = useLocalStorage('token');
  // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  const [postagem, setPostagem] = useState<Postagem>()

  useEffect(() => {
    if (token === '') {
      //alert('Você precisa estar logado!')
      toast.error('Você precisa estar logado!', {
        position: "top-right", // localização da notificação 
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

  useEffect(() => {
    if (id != undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function sim() {

    history.push('/postagens')

    try {
      await deleteId(`/postagens/${id}`, {
        headers: {
          'Authorization': token
        }
      });

     // alert('Postagem deletado com Sucesso!')
      toast.success('Postagem deletado com sucesso!', {
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
     // alert('Erro ao deletar')
      toast.error('Erro ao deletar!', {
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

  function nao() {
    history.push('/postagens')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;