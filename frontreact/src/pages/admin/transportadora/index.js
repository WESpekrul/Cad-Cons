import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@material-ui/icons/Delete';

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
    justifyContent: 'flex',
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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width:'100%'
  }
  
}));

export default function TransportadoraListagem() {
  const classes = useStyles();

  const [transportadoras, setTransportadoras] = useState([]);

  useEffect(()=> {

    async function loadTransportadoras (){
      const response = await api.get("/transportadoras/");
      console.log (response.data)
      setTransportadoras (response.data)
    }
    loadTransportadoras ();
  },[]);

  async function handleDelete(id){
    if(window.confirm("Deseja realmente Excluir Transportadora ??? ")){
      var result = await api.delete("/transportadoras-deletar/"+id);
      if(result.status === 200){
        window.location.href = '/admin/transportadora/';
      }
    }
    else{
      alert('Ocorreu um erro . Por favor tente novamente')

    }

  }

  return (
    <div className={classes.root}>     
      <MenuAdmin title={'TRANSPORTADORAS'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
        <Container maxWidth="xl" className={classes.container}>

        

          <Grid container spacing={1}>
            <Grid item sm={12}>
            <Paper className = {classes.paper}>

                      
                      
                      <h2>Listagem de Transportadoras</h2>                                           
                      
                      <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}> 

                      <Button variant="contained" color="success" href={'/admin/transportadora/cadastrar'}>Cadastrar Transportadora Nova + </Button>
                      <p></p>  
                      <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow>
                              <TableCell>CNPJ</TableCell>
                              <TableCell align="center">Codigo Transportadora</TableCell>
                              <TableCell align="center">Nome</TableCell>
                              <TableCell align="center">Email</TableCell>
                              <TableCell align="center">Data de Atualização</TableCell>
                              <TableCell align="center">Status</TableCell>
                              <TableCell align="center">Status</TableCell>
                            </TableRow>
                          </TableHead>
                        <TableBody>
                          
                        {transportadoras.map((row) => (
                        <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                  {row.cnpj}
                                </TableCell>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.nome}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>                                                               
                                <TableCell align="center">{new Date(row.updatedAt).toLocaleDateString('pt-br')}</TableCell>
                                <TableCell align="center">{row.status===true?<Chip label="Ativo" color = "primary" />:<Chip label="Desativado" color = "warning"/>}</TableCell>
                                <TableCell align="center">
                                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                    <Button color="primary" href={'/admin/transportadora/editar/'+row.id}> Editar</Button>
                                    <Button startIcon={<DeleteIcon />} color="error" onClick={() => handleDelete (row.id)}> Deletar</Button> 
                                                                                                    
                                  </ButtonGroup>
                                </TableCell>

                        </TableRow>
                        ))}
                                                    
                          </TableBody>
                          
      </Table>
    </TableContainer>
                           
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
