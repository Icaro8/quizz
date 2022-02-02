'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alternativas', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pergunta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "perguntas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      alternativa_a: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alternativa_b: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alternativa_c: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alternativa_d: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alternativas');
  }
};
