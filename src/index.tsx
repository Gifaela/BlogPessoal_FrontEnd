import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render( // Renderiza (montar a tela por completo)
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') 
  /*
   <App /> - é um componente em si, eu coloco como se fossem tag's html(Localizado na pasta src>APP.tsx)
  Montra a tela dentro do elemento root. Esse elemento é uma div que está dentro de um arquivo chamdo index.html 
  (Localizado na pasta public>index.html)*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
