const {Router} = require ('express')
const CondutorController = require ('../controllers/CondutorController')

const router = Router ()

router.get ('/condutores/', CondutorController.pegaTodosOsCondutores)
router.get ('/condutores/:id', CondutorController.pegaUmCondutor)
router.post ('/condutores-criar/', CondutorController.criaCondutor)
router.put('/condutores-atualizar/:id', CondutorController.atualizaCondutor)
router.delete('/condutores-deletar/:id', CondutorController.deletaCondutor)

module.exports = router