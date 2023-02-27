import React from 'react';

//import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import Dashboard from './pages/admin/dashboard';

import Transportadoras from './pages/admin/transportadora';
import TransportadoraEditar from './pages/admin/transportadora/transportadoraeditar';
import TransportadoraCadastrar from './pages/admin/transportadora/transportadoracadastrar';

import Condutores from './pages/admin/condutor';
import CondutorEditar from './pages/admin/condutor/condutoreditar';
import CondutorCadastrar from './pages/admin/condutor/condutorcadastrar';

import Veiculos from './pages/admin/veiculo';
import VeiculoEditar from './pages/admin/veiculo/veiculoeditar';
import VeiculoCadastrar from './pages/admin/veiculo/veiculocadastrar';


import Login from './pages/admin/login';
import Home from './pages/client/painel';


function Rota (){ 

    return(
        <BrowserRouter>              
            <Routes>
                {/*Rota Cliente*/}
                <Route path='/admin/' exact element={<Dashboard/>} />
                 {/*Rota Admin*/}
                <Route path="/" exact element={<Login/>}/>
                <Route path="/home" exact element={<Home/>}/>

                <Route path='/admin/login' exact element={<Login/>} />

                
                <Route path="/admin/transportadora" exact element={<Transportadoras/>}/>
                <Route path="/admin/transportadora/cadastrar" exact element={<TransportadoraCadastrar/>}/>
                <Route path="/admin/transportadora/editar/:id" exact element={<TransportadoraEditar/>} />

                <Route path="/admin/condutor" exact element={<Condutores/>}/>
                <Route path="/admin/condutor/cadastrar" exact element={<CondutorCadastrar/>}/>
                <Route path="/admin/condutor/editar/:id" exact element={<CondutorEditar/>} />

                <Route path="/admin/veiculo" exact element={<Veiculos/>}/>
                <Route path="/admin/veiculo/cadastrar" exact element={<VeiculoCadastrar/>}/>
                <Route path="/admin/veiculo/editar/:id" exact element={<VeiculoEditar/>} />                            
                
            </Routes>
        </BrowserRouter>
    )};

export default Rota;