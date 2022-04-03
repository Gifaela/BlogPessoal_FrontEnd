import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { busca, buscaId, post, put } from "../../../services/Service";
import Tema from "../../../models/Tema";
import './CadastroTema.css'

function CadastroTema() {

    let history = useHistory()
    //a ideia do useParams é que eu consiga capturar os paramentros que são enviados por uma URL
    const { id } = useParams<{ id: string }>() // é string, pois ira mudar a URL chamando o id 

    //Usamos Local starage para guardar dados não sensiveis do usuário. é quem captura o token armazenado no 
    const [token, setToken] = useLocalStorage('token')

    //se refere a uma variavel tema e uma função setTema, que vai alterar o State tema a medida que eu tiver um tema cadastrado
    const [tema, setTema] = useState<Tema>({//Tema orienta o que o setTema pode atualizar e grada a informação no tema
        id: 0,
        descricao:''
    })

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar Logado!')
            history.push('/login')
        }
    }, [token]) // está monitorando o token

    useEffect(() => {
        if (id !== undefined) { // se o Id pro diferente de indefinido
            findById(id)  //procura por Id
        }
    }, [id]) //está monitorando o id

    async function findById(id: string) {// procura por ID - id url string
        await buscaId(`/temas/${id}`, setTema, { // Id será encontrado dentro do temas (tema igual ao Swagger)
            headers: {//passando a autorização para fazer a mudança
                'Authorization': token
            }
        })
    }

  

    /*responsavelo por capturar os valores digitados no formulário e atribuilos no setTema que por sua vez, fara
    uma alteração no useState<Tema>*/
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        //ChangeEvent - toda ação é um evento.
        //HTMLInputElement - input é o campo para digitar, Ou seja, o o evento e digitar
        setTema({
            ...tema, //pegar do tema
            [e.target.name]: e.target.value//target é quem faz a ação e busca o nome que no caso é descricao.//value vai validar o tema da descricao tema.descircao
           // postagem:[{}]// a postagem não é para aparecer nada 

        })
    }
   

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        //ChangeEvent - toda ação é um evento.
        //HTMLFormElement - o envio do formulário, das informações digitadas 
        e.preventDefault() // Não atualizar a tela 

        if (id !== undefined) { // se o Id for diferente de indefinido 

            try {
                await put(`/temas`, tema, setTema, { // tente editar pelo url TEMAS/ dado tema /selecionar(tema) (tema igual ao Swagger)
                    headers: {// exige o token
                        'Authorization': token
                    }

                })

                alert('Tema atualizado com Sucesso!')
            } catch (error) {
                console.log(`Error:${error}`) //imprimir no console
                alert("Erro, por favor verificar a quantidade minima de caracteres")
            }
        } else {
            try {
                await post(`/temas`, tema, setTema, { //campos (Service) (tema igual ao Swagger)
                    headers: {
                        'Authorization': token
                    }
                })

                alert('Tema cadastrado com Sucesso!')
            } catch (error) {
                console.log(`Error:${error}`) //imprimir no console
                alert('Erro, por favor verificar a quantidade minima de caracteres')
            }
        }

        back() // para não quebrar, e retorna o usuário ao tema
    }

    function back() {
        history.push('/temas')
    }


    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center" >
                    Formulário de cadastro tema
                </Typography>

                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao"
                    label="descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;