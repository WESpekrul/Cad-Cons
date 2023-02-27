const {Router} = require ('express')
const PesquisaController = require ('../controllers/PesquisaController')

const router = Router ()

router.get ('/pesquisas/', PesquisaController.pegaTodosAsPesquisas)
router.get ('/pesquisas/:id', PesquisaController.pegaUmaPesquisa)
router.post ('/pesquisas-criar/', PesquisaController.criaPesquisa)
router.put('/pesquisas-atualizar/:id', PesquisaController.atualizaPesquisa)
router.delete('/pesquisas-deletar/:id', PesquisaController.deletaPesquisa)

module.exports = router