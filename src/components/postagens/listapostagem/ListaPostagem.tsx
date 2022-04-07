import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
//import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])

  //const [token, setToken] = useLocalStorage('token');
  // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  
  let history = useHistory();

  useEffect(() => {
    if (token === "") {
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


  async function getPost() {
    await busca(`/postagens`, setPosts, { //postagens - igual do back-end
      headers: {// passar no header a autorização(toaken)
        'Authorization': token
      }
    })

  }

  //Invocando o getTema
  useEffect(() => {
    getPost()
  }, [posts.length])//length = tamanho(sempre que o tamano da minha variavel tema modificar, eu aciono a funçãop getTema)

  return (
    <>
      {
        posts.map(posts => (//acabei de criar a variavel (posts - dentro do map)

          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {posts.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {posts.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {posts.tema?.descricao}
                </Typography>
              </CardContent>
              
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${posts.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="primary" className="botaoListarPostagemAtualizar">
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${posts.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="outlined" size='small' color="inherit" className="botaoListarPostagemDeletar">
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
  )
}

export default ListaPostagem;