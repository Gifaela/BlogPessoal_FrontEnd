
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listarTemas/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}> {/*token*/}
      {/*Router Comoponete principal de rotas
      Switch informa quais páginas irão mudar
      Route informa qual a url usada
      exact é para dizer que é exatamente, para não dar
      */}
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>

            <Route exact path='/'>  {/*exact exatamente essa rota */}
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

            <Route exact path='/formularioPostagem'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/formularioPostagem/:id'> {/*put (id) - é para editar*/}
              <CadastroPostagem />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioTema/:id'> {/*put (id) - é para */}
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>


            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>



          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}
export default App; // exporta para (pasta src>index.tsx) 
