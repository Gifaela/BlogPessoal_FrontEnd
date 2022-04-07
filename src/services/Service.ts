import axios from "axios";
import { url } from "inspector";

export const api = axios.create({
    baseURL: 'https://gifaela.herokuapp.com'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados) //await - preciso aguardar o retorno da minha api
    setDado(resposta.data)
}


/*url- /usuarios/logar // dados - passa via body um objeto Json contendo 2 valores, usuario e senha // setDado - receber a resposta do api, um objeto Json contendo os dados do usuário e oum token*/
export const login = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados) //await - preciso aguardar o retorno da minha api
    setDado(resposta.data.token)
}

//Busca as postagens/temas com url e me trás com o token(header)
export const busca = async (url: any, setDado: any, header: any) => { // header é o token 
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}
export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header)
}