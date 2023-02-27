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

export default function CondutorListagem() {
  const classes = useStyles();

  const [condutores, setCondutores] = useState([]);

  useEffect(()=> {

    async function loadCondutores (){
      const response = await api.get("/condutores/");
      console.log (response.data)
      setCondutores (response.data)
    }
    loadCondutores();
  },[]);

  async function handleDelete(id){
    if(window.confirm("Deseja realmente Excluir Condutor ??? ")){
      var result = await api.delete("condutores-deletar"+id);
      if(result.status === 200){
        window.location.href = '/admin/condutor/';
      }
    }
    else{
      alert('Ocorreu um erro . Por favor tente novamente')

    }

  }

  return (
    <div className={classes.root}>     
      <MenuAdmin title={'CONDUTORES'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
        <Container maxWidth="xl" className={classes.container}>        

          <Grid container spacing={1}>
            <Grid item sm={12}>
            <Paper className = {classes.paper}>                      
                      
                      <h2>Listagem de Condutores</h2>                                           
                      
                      <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}> 

                      <Button variant="contained" color="success" href={'/admin/condutor/cadastrar'}>Cadastrar Condutor + </Button>
                      <p></p>  
                      <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Codigo Transp. </TableCell>
                              <TableCell>Codigo Condutor. </TableCell>
                              <TableCell align="center">CPF</TableCell>
                              <TableCell align="center">Nome</TableCell>
                              <TableCell align="center">Aprovado</TableCell>
                              <TableCell align="center">Data de Atualização</TableCell>
                              <TableCell align="center">Opções</TableCell>
                            </TableRow>
                          </TableHead>
                        <TableBody>
                          
                        {condutores.map((row) => (
                        <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                  {row.transpId}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  {row.id}
                                </TableCell>
                                <TableCell align="center">{row.cpf}</TableCell>
                                <TableCell align="center">{row.nome}</TableCell>
                                <TableCell align="center">{row.status===true?<Chip label="Aprovado" color = "primary" />:<Chip label="Reprovado" color = "warning"/>}</TableCell>
                                <TableCell align="center">{new Date(row.updatedAt).toLocaleDateString('pt-br')}</TableCell>
                                <TableCell align="center">
                                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                    <Button color="primary" href={'/admin/condutor/editar/'+row.id}> Editar</Button>
                                    <Button startIcon={<DeleteIcon />} color="error" onClick={() => handleDelete(row.id)}> Deletar</Button> 
                                                                                                    
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
