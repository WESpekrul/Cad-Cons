'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Veiculos.hasMany(models.Pesquisas, {
        foreignKey: 'veicuId'
      })
      Veiculos.belongsTo(models.Condutores, {
        foreignKey: 'condutorId'
      })      
    }
  }
  Veiculos.init({
    placa: DataTypes.STRING,
    condutorId: DataTypes.NUMBER,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING,
    regular: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};