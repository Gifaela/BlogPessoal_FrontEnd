import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
//import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './DeletarTema.css';

function DeletarTema() {

  let history = useHistory()

  const { id } = useParams<{ id: string }>();

  // const [token, setToken] = useLocalStorage('token')

  // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>()

  useEffect(() => { // verificando se a pessoa está logada
    if (token === '') {
      //alert('Você precisa estar logado!')
      toast.info('Você precisa estar logado!', {
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

  useEffect(() => {//verificando se o Id é diferente de nulo
    if (id !== '') {// se é diferente de nulo
      findById(id)//posso fazer a requisição do findById
    }
  }, [id])

  async function findById(id: string) { //findByid é uma finção que vai buscar as informações daquele ID
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })

  }

  async function sim() {
    history.push('/temas')

    try {
      await deleteId(`/temas/${id}`, {
        headers: {
          'Authorization': token
        }
      });

      //alert('Tema deletado com Sucesso!')
      toast.success('Tema deletado com sucesso!', {
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
      //alert('Erro ao deletar')
      toast.error('Erro ao deletar', {
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
    history.push('/temas')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
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
              <Box mx={2}>
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
export default DeletarTema;