'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportadoras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transportadoras.hasMany(models.Condutores, {
        foreignKey: 'transpId'
      })
    }
    
  }
  Transportadoras.init({
    cnpj: DataTypes.NUMBER,
    nome: DataTypes.STRING,
    fone: DataTypes.NUMBER,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transportadoras',
  });
  return Transportadoras;
};