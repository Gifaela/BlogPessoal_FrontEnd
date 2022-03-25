import React from 'react';

import {Grid, Box, Typography, TextField, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './Login.css';
import { textAlign } from '@mui/system';

function Login(){
    
    return(
        <Grid container direction ='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                        {/*Typography = tipo de fonte / gutterBottom = Botão / cor padrão / h3 / alinhamento é no centro / bold é negrito                       */}
                        <Typography variant ='h3' gutterBottom color = 'textPrimary' component='h3' align = 'center' className='textos1'>Entrar</Typography>
                        {/*TexField = campo de texto / id / label = rótulo / variante não tem preenchimento, tem apenas borda/ nome / margem normal / fullWidth = indica que vai ocupar toda a largura do componete */}
                        <TextField  id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>                         
                        <TextField  id='senha' label='senha' variant='outlined' name='senha' margin='normal' type ='password'fullWidth/>   
                        <Box marginTop={2} textAlign='center'>
                            <Link to = '/home' className='text-decarator-none'>
                            {/* type submit - invia as informações / variante tem preenchimento de=a cor*/}
                            <Button type='submit' variant='contained'color='primary' className='botao'>
                                Logar
                            </Button>
                            </Link>
                        </Box>                      
                    </form>
                    <Box display='flex'justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imgMickey'>
            
            </Grid> 
        </Grid>
)}
export default Login;

/*<Grid xs={6} style={{
    backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg)`,
    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
*/