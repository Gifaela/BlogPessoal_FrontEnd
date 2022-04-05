import { createStore } from "redux";
import { tokenReducer } from "./tokens/tokensReducer";

const store = createStore(tokenReducer);

export default store; // agora pode ser acessado de qualquer component React

