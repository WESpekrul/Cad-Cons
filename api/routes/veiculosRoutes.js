const {Router} = require ('express')
const VeiculoController = require ('../controllers/VeiculoController')

const router = Router ()

router.get ('/veiculos/', VeiculoController.pegaTodosOsVeiculos)
router.get ('/veiculos/:id', VeiculoController.pegaUmVeiculo)
router.post ('/veiculos-criar/', VeiculoController.criaVeiculo)
router.put('/veiculos-atualizar/:id', VeiculoController.atualizaVeiculo)
router.delete('/veiculos-deletar/:id', VeiculoController.deletaVeiculo)

module.exports = router