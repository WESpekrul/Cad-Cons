import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import FilledInput from '@mui/material/FilledInput';


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

export default function CondutorCadastrar() {

  const classes = useStyles();

  const [cnpj , setCnpj] = useState ('');
  const [cpf , setCpf] = useState ('');
  const [foto , setFoto] = useState ('');
  const [nome , setNome] = useState ('');
  const [endereco , setEndereco] = useState ('');
  const [uf_res , setUf_res] = useState ('');
  const [cidade , setCidade] = useState ('');
  const [registro_geral , setRegistro_geral] = useState ('');
  const [data_nascimento , setData_nascimento] = useState ('');
  const [uf_nascimento , setUf_nascimento] = useState ('');
  const [cidade_nascimento , setCidade_nascimento] = useState ('');
  const [pai , setPai] = useState ('');
  const [mae , setMae] = useState ('');
  const [registro_cnh , setRegistro_cnh] = useState ('');
  const [uf_reg_cnh , setUf_Rg] = useState ('');
  const [validade_cnh , setValidade_cnh] = useState ('');
  const [categoria_cnh , setCategoria_cnh] = useState ('');
  const [cedula_o_cnh , setCedula_O] = useState ('');
  const [fone , setFone] = useState ('');
  const [primera_data_cnh , setPrimeira_Data] = useState ('');
  const [renach , setRenach] = useState ('');
  const [celular , setCelular] = useState ('');
  const [ref_pess_1 , setRef_pess1] = useState ('');
  const [tlfn_ref_pess_1 , setTlfn_pess1] = useState ('');
  const [ref_come_1 , setRef_come1] = useState ('');
  const [tlfn_ref_come_1 , setTlfn_come1] = useState ('');
  const [ref_pess_2 , setRef_pess2] = useState ('');
  const [tlfn_ref_pess_2 , setTlfn_pess2] = useState ('');
  const [ref_come_2 , setRef_come2] = useState ('');
  const [tlfn_ref_come_2 , setTlfn_come2] = useState ('');
  const [ref_pess_3 , setRef_pess3] = useState ('');
  const [tlfn_ref_pess_3 , setTlfn_pess3] = useState ('');
  const [ref_come_3 , setRef_come3] = useState ('');
  const [tlfn_ref_come_3 , setTlfn_come3] = useState ('');
  const [foto_frente , setFoto_frente] = useState ('');
  const [foto_atras , setFoto_atras] = useState ('');
  const [foto_painel , setFoto_painel] = useState ('');
  const [doc_rg , setDoc_rg] = useState ('');
  const [doc_cpf , setDoc_cpf] = useState ('');
  const [doc_cnh_cart_hab , setDoc_cnh] = useState ('');
  const [doc_copia_cheque , setDoc_cheque] = useState ('');
  const [doc_certidao , setDoc_certidao] = useState ('');
  const [doc_certidao2 , setDoc_certidao2] = useState ('');
  const [doc_comp_endereco , setDoc_comp_endereco] = useState ('');
  const [doc_rdo , setDoc_Rdo] = useState ('');
  const [doc_rdo2 , setDoc_Rdo2] = useState ('');
  const [doc_rdo3 , setDoc_Rdo3] = useState ('');
  const [doc_rdo4 , setDoc_Rdo4] = useState ('');
  const [doc_rdo5 , setDoc_Rdo5] = useState ('');
  const [observacoes , setObservacoes] = useState ('');
  const [observacoes_admin , setObservacoes_admin] = useState ('');
  const [aceitaram , setAceitaram] = useState ('');
  const [doc_admin , setDoc_Admin] = useState ('');
  const [encontro_cad , setEncontro_cad] = useState ('');
  const [encontro_ace , setEncontro_ace] = useState ('');
  const [data_vigencia , setData_vigencia] = useState ('');

  async function handleSubmit(){
    const data = {cnpj:cnpj, cpf:cpf, foto:foto, nome: nome, endereco:endereco, uf_res: uf_res, cidade: cidade, 
      registro_geral: registro_geral, data_nascimento: data_nascimento, uf_nascimento: uf_nascimento, cidade_nascimento: cidade_nascimento,
    pai:pai, mae:mae, registro_cnh:registro_cnh, uf_reg_cnh: uf_reg_cnh, validade_cnh: validade_cnh , categoria_cnh: categoria_cnh, 
    cedula_o_cnh: cedula_o_cnh, fone: fone, primera_data_cnh: primera_data_cnh, renach: renach, celular: celular, ref_pess_1: ref_pess_1, 
    tlfn_ref_pess_1: tlfn_ref_pess_1,  ref_come_1: ref_come_1, tlfn_ref_come_1: tlfn_ref_come_1, ref_pess_2: ref_pess_2, 
  }

    console.log (data)

    if(nome !==''&& cpf !==''&& cnpj !=='' && registro_geral !==''){

      const response = await api.post('/cadcondutor/',data)

    if(response.status === 200){
      window.location.href='/admin/usuarios/'
    }
    else{
      alert ('Erro ao cadastrar ou condutor já cadastrado !');
    }
  }else {
    alert('Por favor Preencher todos os dados');

  }

    }    

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'CONDUTORES'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
                    <Paper className = {classes.paper}>
                      <h2>Cadastro de Condutores</h2>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="cnpj"
                          name="cnpj"
                          label="CNPJ da Transportadora: "
                          fullWidth
                          autoComplete="CNPJ"
                          value={cnpj}
                          onChange = { e => setCnpj (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="cpf"
                          name="cpf"
                          label="CPF do Condutor: "
                          fullWidth
                          autoComplete="CPF"
                          value={cpf}
                          onChange = { e => setCpf (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="foto"
                            name="foto"
                            label="Foto:"
                            fullWidth
                            autoComplete="Foto Condutor"
                            value={foto}
                            onChange = { e => setFoto (e.target.value)}
                          />
                        </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="nome"
                          name="nome"
                          label="Nome: "
                          fullWidth
                          autoComplete="Nome l"
                          value={nome}
                          onChange = { e => setNome (e.target.value)}
                        />
                      </Grid>                     

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="endereco"
                          name="endereco"
                          label="Endereço: "
                          fullWidth
                          autoComplete="Endereço "
                          value={endereco}
                          onChange = { e => setEndereco (e.target.value)}
                        />
                      </Grid>   

                        <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="uf_resid"
                          name="uf_resid"
                          label="uf_resid: "
                          fullWidth
                          autoComplete="uf_resid do Condutor"
                          value={uf_res}
                          onChange = { e => setUf_res (e.target.value)}
                        />
                      </Grid>

                       <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cidade"
                          name="cidade"
                          label="cidade: "
                          fullWidth
                          autoComplete="cidade do Condutor"
                          value={cidade}
                          onChange = { e => setCidade (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="uf_resid"
                          name="uf_resid"
                          label="Uf Residencial: "
                          fullWidth
                          autoComplete="UF do Condutor"
                          value={uf_res}
                          onChange = { e => setUf_res (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="registro_geral"
                          name="registro_geral"
                          label="registro_geral: "
                          fullWidth
                          autoComplete="registro_geral"
                          value={registro_geral}
                          onChange = { e => setRegistro_geral (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="data_nascimento"
                          name="data_nascimento"
                          label="data_nascimento: "
                          fullWidth
                          autoComplete="data_nascimento"
                          value={data_nascimento}
                          onChange = { e => setData_nascimento (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="uf_nascimento"
                          name="uf_nascimento"
                          label="uf_nascimento: "
                          fullWidth
                          autoComplete="uf_nascimento"
                          value={uf_nascimento}
                          onChange = { e => setUf_nascimento (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cidade_nascimento"
                          name="cidade_nascimento"
                          label="cidade_nascimento: "
                          fullWidth
                          autoComplete="cidade_nascimento"
                          value={cidade_nascimento}
                          onChange = { e => setCidade_nascimento (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="pai"
                          name="pai"
                          label="Pai: "
                          fullWidth
                          autoComplete="Pai"
                          value={pai}
                          onChange = { e => setPai (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="mae"
                          name="mae"
                          label="Mae: "
                          fullWidth
                          autoComplete="Mae"
                          value={mae}
                          onChange = { e => setMae (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="registro_cnh"
                          name="registro_cnh"
                          label="Registro_cnh: "
                          fullWidth
                          autoComplete="Registro_cnh"
                          value={registro_cnh}
                          onChange = { e => setRegistro_cnh (e.target.value)}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="uf_reg_cnh"
                          name="uf_reg_cnh"
                          label="UF da CNH: "
                          fullWidth
                          autoComplete="uf_reg_cnh"
                          value={uf_reg_cnh}
                          onChange = { e => setUf_Rg (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="validade_cnh"
                          name="validade_cnh"
                          label="Validade da CNH: "
                          fullWidth
                          autoComplete="validade_cnh"
                          value={validade_cnh}
                          onChange = { e => setValidade_cnh (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="categoria_cnh"
                          name="categoria_cnh"
                          label="Categoria da CNH: "
                          fullWidth
                          autoComplete="categoria_cnh"
                          value={categoria_cnh}
                          onChange = { e => setCategoria_cnh (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="cedula_o_cnh"
                          name="cedula_o_cnh"
                          label="Cedula da CNH: "
                          fullWidth
                          autoComplete="cedula_o_cnh"
                          value={cedula_o_cnh}
                          onChange = { e => setCedula_O (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="fone"
                          name="fone"
                          label="Fone da CNH: "
                          fullWidth
                          autoComplete="fone"
                          value={fone}
                          onChange = { e => setFone (e.target.value)}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="primera_data_cnh"
                          name="primera_data_cnh"
                          label="Primeira Data da CNH: "
                          fullWidth
                          autoComplete="primera_data_cnh"
                          value={primera_data_cnh}
                          onChange = { e => setPrimeira_Data (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="renach"
                          name="renach"
                          label="Renovação da CNH: "
                          fullWidth
                          autoComplete="renach"
                          value={renach}
                          onChange = { e => setRenach (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="celular"
                          name="celular"
                          label="Celular da CNH: "
                          fullWidth
                          autoComplete="celular"
                          value={celular}
                          onChange = { e => setCelular (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_pess_1"
                          name="ref_pess_1"
                          label="Referência Pessoa 1"
                          fullWidth
                          autoComplete="ref_pess_1"
                          value={ref_pess_1}
                          onChange = { e => setRef_pess1 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_pess_1"
                          name="tlfn_ref_pess_1"
                          label="Telefone Referência 1"
                          fullWidth
                          autoComplete="tlfn_ref_pess_1"
                          value={tlfn_ref_pess_1}
                          onChange = { e => setTlfn_pess1 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_come_1"
                          name="ref_come_1"
                          label="Referência Comercial 1"
                          fullWidth
                          autoComplete="ref_come_1"
                          value={ref_come_1}
                          onChange = { e => setRef_come1 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_come_1"
                          name="tlfn_ref_come_1"
                          label="Telefone Referência Comercial 1"
                          fullWidth
                          autoComplete="tlfn_ref_come_1"
                          value={tlfn_ref_come_1}
                          onChange = { e => setTlfn_come1 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_pess_2"
                          name="ref_pess_2"
                          label="Referência Pessoa 2"
                          fullWidth
                          autoComplete="ref_pess_2"
                          value={ref_pess_2}
                          onChange = { e => setRef_pess2 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_pess_2"
                          name="tlfn_ref_pess_2"
                          label="Telefone Referência 2"
                          fullWidth
                          autoComplete="tlfn_ref_pess_2"
                          value={tlfn_ref_pess_2}
                          onChange = { e => setTlfn_pess2 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_come_2"
                          name="ref_come_2"
                          label="Referência Comercial 2"
                          fullWidth
                          autoComplete="ref_come_2"
                          value={ref_come_2}
                          onChange = { e => setRef_come2 (e.target.value)}
                        />
                      </Grid>
                   
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_come_2"
                          name="tlfn_ref_come_2"
                          label="Telefone Referência Comercial 2"
                          fullWidth
                          autoComplete="tlfn_ref_come_2"
                          value={tlfn_ref_come_2}
                          onChange = { e => setTlfn_come2 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_pess_3"
                          name="ref_pess_3"
                          label="Referência Pessoa 3"
                          fullWidth
                          autoComplete="ref_pess_3"
                          value={ref_pess_3}
                          onChange = { e => setRef_pess3 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_pess_3"
                          name="tlfn_ref_pess_3"
                          label="Telefone Referência 3"
                          fullWidth
                          autoComplete="tlfn_ref_pess_3"
                          value={tlfn_ref_pess_3}
                          onChange = { e => setTlfn_pess3 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="ref_come_3"
                          name="ref_come_3"
                          label="Referência Comercial 3"
                          fullWidth
                          autoComplete="ref_come_3"
                          value={ref_come_3}
                          onChange = { e => setRef_come3 (e.target.value)}
                        />
                      </Grid>
                   
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="tlfn_ref_come_3"
                          name="tlfn_ref_come_3"
                          label="Telefone Referência Comercial 3"
                          fullWidth
                          autoComplete="tlfn_ref_come_3"
                          value={tlfn_ref_come_3}
                          onChange = { e => setTlfn_come3 (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="foto_frente"
                            name="foto_frente"
                            label="Foto frente CNH:"
                            fullWidth
                            autoComplete="Foto CNh frente"
                            value={foto_frente}
                            onChange = { e => setFoto_frente (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="foto_atras"
                            name="foto_atras"
                            label="Foto atras CNH:"
                            fullWidth
                            autoComplete="Foto CNh atras"
                            value={foto_atras}
                            onChange = { e => setFoto_atras (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="foto_painel"
                            name="foto_painel"
                            label="Foto painel :"
                            fullWidth
                            autoComplete="Foto painel"
                            value={foto_painel}
                            onChange = { e => setFoto_painel (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rg"
                            name="doc_rg"
                            label="Foto Doc RG:"
                            fullWidth
                            autoComplete="Foto RG"
                            value={doc_rg}
                            onChange = { e => setDoc_rg (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_cpf"
                            name="doc_cpf"
                            label="Foto Doc CPF:"
                            fullWidth
                            autoComplete="Foto CPF"
                            value={doc_cpf}
                            onChange = { e => setDoc_cpf (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_cnh_cart_hab"
                            name="doc_cnh_cart_hab"
                            label="Foto Doc CNH:"
                            fullWidth
                            autoComplete="Foto CNH"
                            value={doc_cnh_cart_hab}
                            onChange = { e => setDoc_cnh (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_copia_cheque"
                            name="doc_copia_cheque"
                            label="Foto Cheque:"
                            fullWidth
                            autoComplete="Foto Cheque"
                            value={doc_copia_cheque}
                            onChange = { e => setDoc_cheque (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_certidao"
                            name="doc_certidao"
                            label="Foto Certidao:"
                            fullWidth
                            autoComplete="Foto Certidao"
                            value={doc_certidao}
                            onChange = { e => setDoc_certidao (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_certidao2"
                            name="doc_certidao2"
                            label="Foto Certidao2:"
                            fullWidth
                            autoComplete="Foto Certidao 2"
                            value={doc_certidao2}
                            onChange = { e => setDoc_certidao2 (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_comp_endereco"
                            name="doc_comp_endereco"
                            label="Foto Comprovante Endereço"
                            fullWidth
                            autoComplete="Foto Comprovante Endereço"
                            value={doc_comp_endereco}
                            onChange = { e => setDoc_comp_endereco (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rdo"
                            name="doc_rdo"
                            label="Foto RDO"
                            fullWidth
                            autoComplete="Foto RDO"
                            value={doc_rdo}
                            onChange = { e => setDoc_Rdo (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rdo2"
                            name="doc_rdo2"
                            label="Foto RDO 2"
                            fullWidth
                            autoComplete="Foto RDO 2"
                            value={doc_rdo2}
                            onChange = { e => setDoc_Rdo2 (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rdo3"
                            name="doc_rdo3"
                            label="Foto RDO 3"
                            fullWidth
                            autoComplete="Foto RDO 3"
                            value={doc_rdo3}
                            onChange = { e => setDoc_Rdo3 (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rdo4"
                            name="doc_rdo4"
                            label="Foto RDO 4"
                            fullWidth
                            autoComplete="Foto RDO 4"
                            value={doc_rdo4}
                            onChange = { e => setDoc_Rdo4 (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_rdo5"
                            name="doc_rdo5"
                            label="Foto RDO 5"
                            fullWidth
                            autoComplete="Foto RDO 5"
                            value={doc_rdo5}
                            onChange = { e => setDoc_Rdo5 (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="observacoes"
                          name="observacoes"
                          label="Observações"
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
                          label="Observações Adm"
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
                          label=" Aceitaram ?"
                          fullWidth
                          autoComplete="aceitaram"
                          value={aceitaram}
                          onChange = { e => setAceitaram (e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={3}>
                          <FilledInput
                            type="file"
                            required
                            id="doc_admin"
                            name="doc_admin"
                            label="Foto Adm"
                            fullWidth
                            autoComplete="Foto ADM "
                            value={doc_admin}
                            onChange = { e => setDoc_Admin (e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <form className={classes.container} noValidate>
                            <TextField
                                id="encontro_cad"
                                name="encontro_cad"
                                label="encontro_cad"
                                type="encontro_cad"
                                defaultValue="2023-01-01"
                                value={encontro_cad}
                                onChange = { e => setEncontro_cad (e.target.value)}
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,}}
                            />
                          </form>
                        </Grid>

                       
                        <Grid item xs={12} sm={6}>
                          <form className={classes.container} noValidate>
                            <TextField
                                id="encontro_ace"
                                name="encontro_ace"
                                label="encontro_ace"
                                type="encontro_ace"
                                defaultValue="2023-01-01"
                                value={encontro_ace}
                                onChange = { e => setEncontro_ace (e.target.value)}
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,}}
                            />
                          </form>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <form className={classes.container} noValidate>
                            <TextField
                                id="data_vigencia"
                                name="data_vigencia"
                                label="data_vigencia"
                                type="data_vigencia"
                                defaultValue="2023-01-01"                                
                                value={data_vigencia}
                                onChange = { e => setData_vigencia (e.target.value)}
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,}}
                            />
                          </form>
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