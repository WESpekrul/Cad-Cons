const database = require ('../models')

class PesquisaController {
    static async pegaTodosAsPesquisas (req, res) {
        try {
            const todasAsPesquisas = await database.Pesquisas.findAll()
            return res.status(200).json(todasAsPesquisas)
        }catch (error){
            return res.status(500).json(error.message)

        }
        
    }

    static async pegaUmaPesquisa (req, res) {
        const {id} = req.params
        try {           
            const umaPesquisa = await database.Pesquisas.findOne({
                where: {id: Number (id)}
            })
            return res.status(200).json(umaPesquisa)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async criaPesquisa (req, res) {
        const novaPesquisa = req.body
        try {           
            const criaPesquisaNova = await database.Pesquisas.create(novaPesquisa)
            return res.status(200).json(criaPesquisaNova)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async atualizaPesquisa (req, res) {
        const {id} = req.params
        const novasInfos = req.body
        try {           
            await database.Pesquisas.update (novasInfos, { where: {id: Number (id)} })
            const pesquisaAtualizada = await database.Pesquisas.findOne({ where: {id: Number (id)} })
            return res.status (200).json(pesquisaAtualizada)     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async deletaPesquisa (req, res) {
        const {id} = req.params        
        try {           
            await database.Pesquisas.destroy ({ where: {id: Number (id)}})            
            return res.status (200).json({mensagem: `Pesquisa ID: ${id} Deletado com sucesso`})     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }  

}

module.exports = PesquisaController