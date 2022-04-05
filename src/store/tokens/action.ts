export type Action ={type: "ADD_TOKEN", payload: string};   
                    //tipo da ação(add), tipagem (string)

export const addToken = (token:string): Action =>({
    type: "ADD_TOKEN", //método que será enviado pela função de Dispatch
    payload: token
});