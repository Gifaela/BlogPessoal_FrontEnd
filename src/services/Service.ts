import axios from "axios";

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
