'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.changeColumn('Products', 'hazmat', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
      }),
      queryInterface.changeColumn('Products', 'active', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
      }),
      queryInterface.changeColumn('Products', 'restockable', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          
      }),
      queryInterface.changeColumn('Products', 'vendor_case_pack', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          
      }),
      queryInterface.changeColumn('Products', 'moq', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          
      }),

      queryInterface.changeColumn('Products', 'minimum_level', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          
      }),

      queryInterface.changeColumn('Products', 'ignore_until', {
          type: Sequelize.STRING,
          allowNull: true,
      }, {
          
      }),


  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
