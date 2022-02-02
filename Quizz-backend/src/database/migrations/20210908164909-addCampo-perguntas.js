'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('perguntas', 'alreadyUsed', { type: Sequelize.BOOLEAN });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('perguntas', 'alreadyUsed');
  }
};
