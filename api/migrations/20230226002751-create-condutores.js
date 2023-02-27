'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Condutores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      transpId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Transportadoras', key: 'id'}
      },
      fone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Condutores');
  }
};