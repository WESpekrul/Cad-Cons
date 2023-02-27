const {Router} = require ('express')
const TransportadoraController = require ('../controllers/TransportadoraController')

const router = Router ()

router.get ('/transportadoras', TransportadoraController.pegaTodasAsTransportadoras)
router.get ('/transportadoras/:id', TransportadoraController.pegaUmaTransportadora)
router.post ('/transportadoras-criar', TransportadoraController.criaTransportadora)
router.put('/transportadoras-atualizar/:id', TransportadoraController.atualizaTransportadora)
router.delete('/transportadoras-deletar/:id', TransportadoraController.deletaTransportadora)

module.exports = router