import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import { useParams } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width:'100%'
  }
  
}));

export default function TransportadoraEditar() {

  const classes = useStyles();  

  const [cnpj , setCnpj] = useState ('');
  const [nome , setNome] = useState ('');
  const [fone , setFone] = useState ('');
  const [email , setEmail] = useState ('');
  const [status , setStatus] = useState ('');

  const { id } = useParams();

  useEffect(() => {
    async function getTransportadora(){
      var response = await api.get('/listartransportadora/'+id);      
      
      setCnpj(response.data.cnpj);
      setNome(response.data.nome);
      setFone(response.data.fone);
      setEmail(response.data.email);
      setStatus(response.data.status);

      }
      
      getTransportadora();
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  async function handleSubmit(){
    const data = {
      cnpj: cnpj,
      nome: nome,      
      fone: fone,         
      email: email,      
      status:status     
      
    }

    

    if(nome !=='' && cnpj!==''){

      const response = await api.put('/editatransportadora/',data)

    if(response.status === 200){
      window.location.href='/admin/transportadora/'
    }
    else{
      alert ('Erro ao editar a transportadora !');
    }
  }else {
    alert('Por favor Preencher todos os dados');

  }

  }    

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'TRANSPORTADORA'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>            
                    <Paper className = {classes.paper}>
                      <h2>Atualização de Transportadora</h2>
                      <Grid container spacing={3}>
                      
                        <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cnpj"
                          name="cnpj"
                          label="CNPJ: "
                          fullWidth
                          autoComplete="CNPJ"
                          value={cnpj}
                          onChange = { e => setCnpj (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="nome"
                          name="nome"
                          label="Nome: "
                          fullWidth
                          autoComplete="Nome"
                          value={nome}
                          onChange = { e => setNome (e.target.value)}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="fone"
                          name="fone"
                          label="Telefone: "
                          fullWidth
                          autoComplete="Telefone Fixo"
                          value={fone}
                          onChange = { e => setFone (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Email: "
                          fullWidth
                          autoComplete="Email "
                          value={email}
                          onChange = { e => setEmail (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="status">Status</InputLabel>
                            <Select 
                            labelId="status" 
                            id="status"
                            value={status}
                            onChange = { e => setStatus (e.target.value)}
                            >    
                              <MenuItem value={true}>Ativo</MenuItem>
                              <MenuItem value={false}>Inativo</MenuItem>                            
                            </Select>
                        </FormControl>
                      </Grid>

                        <Grid item xs={12} sm={6}>
                        <Button variant="contained" onClick={handleSubmit} color="primary">
                          Salvar
                        </Button>   
                        </Grid>
                        </Grid>                   
                        </Paper>                           
                        </Grid>
                        
                        </Grid>                        
                          <Box pt={4}>
                              <Footer />
                          </Box>
                          </Container>
                        </main>
                      </div>
                    );
                  }
                  
                  

