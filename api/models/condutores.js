'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      

      Condutores.hasMany(models.Pesquisas, {
        foreignKey: 'conduId'
      })

      Condutores.hasMany(models.Veiculos, {
        foreignKey: 'condutorId'
      })
      
      Condutores.belongsTo(models.Transportadoras, {
        foreignKey: 'transpId'
      })

      
      
    }
  }
  Condutores.init({
    cpf: DataTypes.NUMBER,
    nome: DataTypes.STRING,
    transpId: DataTypes.NUMBER,
    fone: DataTypes.NUMBER,
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Condutores',
  });
  return Condutores;
};