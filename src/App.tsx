import { Grid } from '@material-ui/core';

import React from 'react';

import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/estaticos/footer/Footer'


import './App.css';

//let nome = 'Giulia';

function App() { // dentro do App.tsx que está todo o código que conseguimos visualizar na tela
  return (
    //<h1>Hello World</h1>
    //<h1>{nome}</h1>
    // <Home/>

    <>
      <Navbar />
      <Home />
      <Footer />
    </>




   /*  ____________________________________________________BOX_AND_GRID_______________________________________________
   <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
      </Grid>
    </>
    */
  );
}

export default App; // exporta para (pasta src>index.tsx) 
