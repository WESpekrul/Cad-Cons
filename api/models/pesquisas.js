'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesquisas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Pesquisas.belongsTo(models.Condutores, {
        foreignKey: 'conduId'
      })

      Pesquisas.belongsTo(models.Veiculos, {
        foreignKey: 'veicuId'
      })


      
    }
  }
  Pesquisas.init({
    conduId: DataTypes.NUMBER,
    veicuId: DataTypes.NUMBER,
    resultado: DataTypes.STRING,
    status_pesquisa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pesquisas',
  });
  return Pesquisas;
};