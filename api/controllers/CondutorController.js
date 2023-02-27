const database = require ('../models')

class CondutorController {
    static async pegaTodosOsCondutores (req, res) {
        try {
            const todosOsCondutores = await database.Condutores.findAll()
            return res.status(200).json(todosOsCondutores)
        }catch (error){
            return res.status(500).json(error.message)

        }
        
    }

    static async pegaUmCondutor (req, res) {
        const {id} = req.params
        try {           
            const umCondutor = await database.Condutores.findOne({
                where: {id: Number (id)}
            })
            return res.status(200).json(umCondutor)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async criaCondutor (req, res) {
        const novoCondutor = req.body
        try {           
            const criaCondutorNovo = await database.Condutores.create(novoCondutor)
            return res.status(200).json(criaCondutorNovo)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async atualizaCondutor (req, res) {
        const {id} = req.params
        const novasInfos = req.body
        try {           
            await database.Condutores.update (novasInfos, { where: {id: Number (id)} })
            const condutorAtualizado = await database.Condutores.findOne({ where: {id: Number (id)} })
            return res.status (200).json(condutorAtualizado)     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async deletaCondutor (req, res) {
        const {id} = req.params        
        try {           
            await database.Condutores.destroy ({ where: {id: Number (id)}})            
            return res.status (200).json({mensagem: `Condutor ID: ${id} Deletado com sucesso`})     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    

}

module.exports = CondutorController