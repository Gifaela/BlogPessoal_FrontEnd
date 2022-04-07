import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
//import useLocalStorage from "react-use-localstorage";
import { busca, buscaId, post, put } from "../../../services/Service";
import Tema from "../../../models/Tema";
import './CadastroTema.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroTema() {

    let history = useHistory()
    //a ideia do useParams é que eu consiga capturar os paramentros que são enviados por uma URL
    const { id } = useParams<{ id: string }>() // é string, pois ira mudar a URL chamando o id 

    //Usamos Local starage para guardar dados não sensiveis do usuário. é quem captura o token armazenado no 
    //const [token, setToken] = useLocalStorage('token')

    // useSelector acessa o meu store, e lá vai pegar o token e atribuir a essa constante 14:30 - 37
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    //se refere a uma variavel tema e uma função setTema, que vai alterar o State tema a medida que eu tiver um tema cadastrado
    const [tema, setTema] = useState<Tema>({//Tema orienta o que o setTema pode atualizar e grada a informação no tema
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === '') {
            // alert('Você precisa estar Logado!')
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
            [e.target.name]: e.target.value,//target é quem faz a ação e busca o nome que no caso é descricao.//value vai validar o tema da descricao tema.descircao
            postagem: [{}]// a postagem não é para aparecer nada 

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

                //alert('Tema atualizado com Sucesso!')
                toast.success('Tema atualizado com sucesso!', {
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
                console.log(`Error:${error}`) //imprimir no console
                //alert("Erro, por favor verificar a quantidade minima de caracteres")
                toast.error('Erro, por favor verificar a quantidade minima de caracteres', {
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
        } else {
            try {
                await post(`/temas`, tema, setTema, { //campos (Service) (tema igual ao Swagger)
                    headers: {
                        'Authorization': token
                    }
                })

                //alert('Tema cadastrado com Sucesso!')

                toast.success('Tema cadastrado com sucesso!', {
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
                console.log(`Error:${error}`) //imprimir no console
                // alert('Erro, por favor verificar a quantidade minima de caracteres')
                toast.error('Erro, por favor verificar a quantidade minima de caracteres', {
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