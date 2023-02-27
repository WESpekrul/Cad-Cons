'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pesquisas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conduId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Condutores', key: 'id'}
      },
      veicuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Veiculos', key: 'id'}
      },
      resultado: {
        type: Sequelize.STRING
      },
      status_pesquisa: {
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
    await queryInterface.dropTable('Pesquisas');
  }
};