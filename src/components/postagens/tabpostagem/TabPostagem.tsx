import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';

import './TabPostagem.css';
import ListaPostagem from '../../postagens/listapostagem/ListaPostagem';



function TabPostagem() {
    const [value, setValue] = useState('1') //asmazena o valor da tab (setValue) - tem que iniciar com um valor useState inicia com valor 1 
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {//handleChange - manipular a aleração -> evento de alteração, armazena o valor 1 ou dois
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}> {/*como se foesse um container das nossas abas... value carrega o valor 1*/}
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange} className='tab'> {/*possui duas tabs*/}
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography
                        variant="h5"
                        gutterBottom color="textPrimary"
                        component="h5"
                        align="center"
                        className="tituloTabPostagem">
                        Sobre-nós
                    </Typography>

                    <Typography
                        variant="body1"
                        gutterBottom color="textPrimary"
                        align="justify"
                        className="textoTabPostagem">
                        Oiii, meu nome é Giulia e sou a dev desse Blog
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;