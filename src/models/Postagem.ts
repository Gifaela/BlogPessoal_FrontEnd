import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema|null; // para cadastrar uma postagem, devo ter um tema previamente cadastrado, então devemos importar o Tema
}
export default Postagem;