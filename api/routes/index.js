const handlebars = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require ('cookie-parser')
const cors = require ('cors')
const transportadoras = require ('./transportadorasRoutes')
const condutores = require ('./condutoresRoutes')
const veiculos = require ('./veiculosRoutes')
const pesquisas = require ('./pesquisasRoutes')


module.exports = app => {
    app.use(bodyParser.json())
    
app.use(cookieParser())
app.use(cors())
//Arquivos CSS Publicos
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
//Config Template Engine
app.engine('handlebars',handlebars({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))
app.set('view engine', 'handlebars')
//Config Body-Parser
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
    app.use(transportadoras)  
    app.use(condutores)
    app.use(veiculos)
    app.use(pesquisas)
      
}

