import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
//import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])

  //const [token, setToken] = useLocalStorage('token');

   // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
   const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  let history = useHistory();
  //useEffect + useHistory - verifica se o token esta vaziu ou não, se estiver vaziu, o History direciona para tela de login
  //useEffect - é usado para fazer a requisição na nossa api

  useEffect(() => {
    if (token =='') {
      //alert('Você deve estar logado!')
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
      history.push('login')
    }
  }, [token])

  async function getTema() {
    await busca('/temas', setTemas, { //temas - igual do back-end
      headers: { // passar no header a autorização(toaken)
        'Authorization': token
      }
    })
  }

  //Invocando o getTema
  useEffect(() => {
    getTema()
  }, [temas.length]) //length = tamanho(sempre que o tamano da minha variavel tema modificar, eu aciono a funçãop getTema)
  return (
    <>
      {
        temas.map(tema => (//acabei de criar a variavel (tema - dentro do map)
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2"> {/*para que serve component? */}
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${tema.id}`}>  {/*Vai encaminhar para */}
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
    </>
  );
}


export default ListaTema;