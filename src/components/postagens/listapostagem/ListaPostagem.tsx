import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])

  const [token, setToken] = useLocalStorage('token');

  let history = useHistory();

  useEffect(() => {
    if (token === "") {
      alert('Você precisa estar logado!')
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