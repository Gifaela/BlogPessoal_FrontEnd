
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    /*Router Comoponete principal de rotas 
    Switch informa quais páginas irão mudar
    Route informa qual a url usada
    exact é para dizer que é exatamente, para não dar
    */
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight:'100vh'}}>
        <Route exact path='/'>
            <Login />
          </Route>
          
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route path='/postagens'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App; // exporta para (pasta src>index.tsx) 
