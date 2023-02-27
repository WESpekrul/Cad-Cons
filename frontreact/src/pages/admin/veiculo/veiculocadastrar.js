import React , {useState} from 'react';
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
//import { useParams } from 'react-router-dom';

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

export default function VeiculoCadastrar() {

  const classes = useStyles();

  const [cnpj , setCnpj] = useState ('');
  const [placa , setPlaca] = useState ('');
  const [categoria , setCategoria] = useState ('');
  const [marca , setMarca] = useState ('');
  const [modelo , setModelo] = useState ('');
  const [chassi , setChassi] = useState ('');
  const [tipo , setTipo] = useState ('');
  const [rntrc , setRntrc] = useState ('');
  const [ano_fabricacao , setAno_fabricacao] = useState ('');
  const [cor, setCor] = useState ('');
  const [cpf , setCpf] = useState ('');
  const [nome_completo , setNome_completo] = useState ('');
  const [cep , setCep] = useState ('');
  const [endereco , setEndereco ] = useState ('');
  const [uf , setUf] = useState ('');
  const [cidade , setCidade] = useState ('');
  const [fone_fixo , setFone_fixo] = useState ('');
  const [celular , setCelular] = useState ('');
  const [num_seguranca , setNum_seguranca] = useState ('');
  const [doc_crvl , setDoc_crvl] = useState ('');
  const [doc_cvr , setDoc_cvr] = useState ('');
  const [observacoes , setObservacoes] = useState ('');
  const [observacoes_admin , setObservacoes_admin] = useState ('');
  const [aceitaram , setAceitaram] = useState ('');
  const [doc_admin , setDoc_admin] = useState ('');
  const [encontro_cad , setEncontro_cad] = useState (''); 
  const [encontro_ace , setEncontro_ace] = useState ('');
  const [data_vigencia , setData_vigencia] = useState ('');
  const [senha , setSenha] = useState ('');
  const [status , setStatus] = useState ('');



  async function handleSubmit(){
    const data = {cnpj: cnpj, placa: placa, categoria: categoria, marca: marca, 
    senha: senha, modelo: modelo, chassi: chassi, tipo: tipo, rntrc: rntrc, 
    ano_fabricacao, cor: cor, cpf: cpf, nome_completo: nome_completo, cep: cep, 
    endereco: endereco, uf: uf, cidade: cidade, fone_fixo: fone_fixo, celular: celular, 
    num_seguranca: num_seguranca, doc_crvl: doc_crvl, doc_cvr: doc_cvr, observacoes: observacoes, 
    observacoes_admin: observacoes_admin, aceitaram: aceitaram, doc_admin: doc_admin, encontro_cad: encontro_cad, 
    encontro_ace: encontro_ace,  data_vigencia: data_vigencia, status: status,     
   } 

    console.log (data)

    if(cnpj !==''&& placa !==''&& categoria !=='' && marca !=='' && senha !==''){

      const response = await api.post('/cadveiculo/',data)

    if(response.status === 200){
      window.location.href='/admin/veiculo/'
    }
    else{
      alert ('Erro ao cadastrar ou veiculo já cadastrado !');
    }
  }else {
    alert('Por favor Preencher todos os dados');

  }

    }    

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'VEICULOS'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>            
                    <Paper className = {classes.paper}>
                      <h2>Cadastro de Veiculo</h2>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="cnpj"
                          name="cnpj"
                          label="CNPJ do Cliente: "
                          fullWidth
                          autoComplete="CNPJ"
                          value={cnpj}
                          onChange = { e => setCnpj (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="placa"
                          name="placa"
                          label="Placa do Veiculo: "
                          fullWidth
                          autoComplete="Placa"
                          value={placa}
                          onChange = { e => setPlaca (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="categoria"
                          name="categoria"
                          label="Categoria do Veiculo: "
                          fullWidth
                          autoComplete="categoria"
                          value={categoria}
                          onChange = { e => setCategoria (e.target.value)}
                        />
                      </Grid>


                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="marca"
                          name="marca"
                          label="Marca do Veiculo: "
                          fullWidth
                          autoComplete="Marca"
                          value={marca}
                          onChange = { e => setMarca (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="modelo"
                          name="modelo"
                          label="Modelo do Veiculo: "
                          fullWidth
                          autoComplete="Modelo"
                          value={modelo}
                          onChange = { e => setModelo (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="chassi"
                          name="chassi"
                          label="Nº do Chassi do Veiculo: "
                          fullWidth
                          autoComplete="Chassi"
                          value={chassi}
                          onChange = { e => setChassi (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="labelTipo">Tipo</InputLabel>
                            <Select 
                            labelId="labelTipo" 
                            id="tipo"
                            value={tipo}
                            onChange = { e => setTipo (e.target.value)}
                            >                            
                              <MenuItem value={'A'}>Categoria A</MenuItem>
                              <MenuItem value={'B'}>Categoria B</MenuItem>
                              <MenuItem value={'C'}>Categoria C</MenuItem>
                              <MenuItem value={'D'}>Categoria D</MenuItem>
                              <MenuItem value={'E'}>Categoria E</MenuItem>
                            </Select>
                        </FormControl>                      
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="rntrc"
                          name="rntrc"
                          label="Nº do Documento RNTRC: "
                          fullWidth
                          autoComplete="RNTRC"
                          value={rntrc}
                          onChange = { e => setRntrc (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ano_fabricacao"
                          name="ano_fabricacao"
                          label="Ano de Fabricação: "
                          fullWidth
                          autoComplete="Ano"
                          value={ano_fabricacao}
                          onChange = { e => setAno_fabricacao (e.target.value)}
                        />
                      </Grid>                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cor"
                          name="cor"
                          label="Cor do Veiculo"
                          fullWidth
                          autoComplete="Cor"
                          value={cor}
                          onChange = { e => setCor (e.target.value)}
                        />
                      </Grid>                                          
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cpf"
                          name="cpf"
                          label="CPF do Proprietário"
                          fullWidth
                          autoComplete="Cpf"
                          value={cpf}
                          onChange = { e => setCpf (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="nome_completo"
                          name="nome_completo"
                          label="Nome Completo do Proprietário"
                          fullWidth
                          autoComplete="Nome Completo"
                          value={nome_completo}
                          onChange = { e => setNome_completo (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cep"
                          name="cep"
                          label="Cep do Proprietário"
                          fullWidth
                          autoComplete="Cep"
                          value={cep}
                          onChange = { e => setCep (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="endereco"
                          name="endereco"
                          label="Endereço do Proprietário"
                          fullWidth
                          autoComplete="Endereço"
                          value={endereco}
                          onChange = { e => setEndereco (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="uf"
                          name="uf"
                          label="UF do Proprietário"
                          fullWidth
                          autoComplete="UF"
                          value={uf}
                          onChange = { e => setUf (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cidade"
                          name="cidade"
                          label="Cidade do Proprietário"
                          fullWidth
                          autoComplete="cidade"
                          value={cidade}
                          onChange = { e => setCidade (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="fone_fixo"
                          name="fone_fixo"
                          label="Fone do Fixo"
                          fullWidth
                          autoComplete="fone_fixo"
                          value={fone_fixo}
                          onChange = { e => setFone_fixo (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="celular"
                          name="celular"
                          label="Celular "
                          fullWidth
                          autoComplete="celular"
                          value={celular}
                          onChange = { e => setCelular (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="num_seguranca"
                          name="num_seguranca"
                          label="num_seguranca "
                          fullWidth
                          autoComplete="num_seguranca"
                          value={num_seguranca}
                          onChange = { e => setNum_seguranca (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="doc_crvl"
                          name="doc_crvl"
                          label="doc_crvl"
                          fullWidth
                          autoComplete="doc_crvl"
                          value={doc_crvl}
                          onChange = { e => setDoc_crvl (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="doc_cvr"
                          name="doc_cvr"
                          label="doc_cvr"
                          fullWidth
                          autoComplete="doc_cvr"
                          value={doc_cvr}
                          onChange = { e => setDoc_cvr (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="observacoes"
                          name="observacoes"
                          label="observacoes"
                          fullWidth
                          autoComplete="observacoes"
                          value={observacoes}
                          onChange = { e => setObservacoes (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="observacoes_admin"
                          name="observacoes_admin"
                          label="observacoes_admin"
                          fullWidth
                          autoComplete="observacoes_admin"
                          value={observacoes_admin}
                          onChange = { e => setObservacoes_admin (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="aceitaram"
                          name="aceitaram"
                          label="aceitaram"
                          fullWidth
                          autoComplete="aceitaram"
                          value={aceitaram}
                          onChange = { e => setAceitaram (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="doc_admin"
                          name="doc_admin"
                          label="doc_admin"
                          fullWidth
                          autoComplete="doc_admin"
                          value={doc_admin}
                          onChange = { e => setDoc_admin (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="encontro_cad"
                          name="encontro_cad"
                          label="encontro_cad"
                          fullWidth
                          autoComplete="encontro_cad"
                          value={encontro_cad}
                          onChange = { e => setEncontro_cad (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="encontro_ace"
                          name="encontro_ace"
                          label="encontro_ace"
                          fullWidth
                          autoComplete="encontro_ace"
                          value={encontro_ace}
                          onChange = { e => setEncontro_ace (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="data_vigencia"
                          name="data_vigencia"
                          label="data_vigencia"
                          fullWidth
                          autoComplete="data_vigencia"
                          value={data_vigencia}
                          onChange = { e => setData_vigencia (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="status"
                          name="status"
                          label="status"
                          fullWidth
                          autoComplete="status"
                          value={status}
                          onChange = { e => setStatus (e.target.value)}
                        />
                      </Grid>

                        <Grid item xs={12} sm={3}>
                          <TextField
                            type="password"
                            required
                            id="senha"
                            name="senha"
                            label="Senha:"
                            fullWidth
                            autoComplete="Senha Unica"
                            value={senha}
                            onChange = { e => setSenha (e.target.value)}
                          />
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