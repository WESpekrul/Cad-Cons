const database = require ('../models')

class TransportadoraController {
    static async pegaTodasAsTransportadoras (req, res) {
        try {
            const todasAsTransportadoras = await database.Transportadoras.findAll()
            return res.status(200).json(todasAsTransportadoras)
        }catch (error){
            return res.status(500).json(error.message)

        }
        
    }

    static async pegaUmaTransportadora (req, res) {
        const {id} = req.params
        try {           
            const umaTransportadora = await database.Transportadoras.findOne({
                where: {id: Number (id)}
            })
            return res.status(200).json(umaTransportadora)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async criaTransportadora (req, res) {
        const novaTransportadora = req.body
        try {           
            const criaTransportadoraNova = await database.Transportadoras.create(novaTransportadora)
            return res.status(200).json(criaTransportadoraNova)
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async atualizaTransportadora (req, res) {
        const {id} = req.params
        const novasInfos = req.body
        try {           
            await database.Transportadoras.update (novasInfos, { where: {id: Number (id)} })
            const transportadoraAtualizada = await database.Transportadoras.findOne({ where: {id: Number (id)} })
            return res.status (200).json(transportadoraAtualizada)     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    static async deletaTransportadora (req, res) {
        const {id} = req.params        
        try {           
            await database.Transportadoras.destroy ({ where: {id: Number (id)}})            
            return res.status (200).json({mensagem: `Transportadora ID: ${id} Deletado com sucesso`})     
        }
        catch (error){
            return res.status(500).json(error.message)
        }
        
    }

    

}

module.exports = TransportadoraController