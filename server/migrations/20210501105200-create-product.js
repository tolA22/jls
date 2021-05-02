'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      
      core_number: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      internal_title: {
        type: Sequelize.STRING
      },
      vendor: {
        type: Sequelize.STRING
      },
      vendor_title: {
        type: Sequelize.STRING
      },
      vendor_sku: {
        type: Sequelize.STRING
      },
      backup_vendor: {
        type: Sequelize.STRING
      },
      backup_vendor_sku: {
        type: Sequelize.STRING
      },
      restockable: {
        type: Sequelize.BOOLEAN
      },
      vendor_order_unit: {
        type: Sequelize.STRING
      },
      vendor_case_pack: {
        type: Sequelize.INTEGER
      },
      moq: {
        type: Sequelize.INTEGER
      },
      buffer_days: {
        type: Sequelize.INTEGER
      },
      minimum_level: {
        type: Sequelize.INTEGER
      },
      product_url: {
        type: Sequelize.STRING
      },
      note_for_next_order: {
        type: Sequelize.STRING
      },
      case_pack: {
        type: Sequelize.INTEGER
      },
      pieces_per_internal_box: {
        type: Sequelize.INTEGER
      },
      boxes_per_case: {
        type: Sequelize.INTEGER
      },
      tags_info: {
        type: Sequelize.STRING
      },
      tag1: {
        type: Sequelize.STRING
      },
      tag2: {
        type: Sequelize.STRING
      },
      tag3: {
        type: Sequelize.STRING
      },
      tag4: {
        type: Sequelize.INTEGER
      },
      hazmat: {
        type: Sequelize.BOOLEAN
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      ignore_until: {
        type: Sequelize.DATE
      },
      notes: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};