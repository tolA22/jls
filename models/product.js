'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',{
    core_number: {
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true

    },
    internal_title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    vendor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    vendor_title: DataTypes.STRING,
    vendor_sku: {
      type:DataTypes.STRING,
      allowNull:false
    },
    backup_vendor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    backup_vendor_sku: {
      type:DataTypes.STRING,
      allowNull:false
    },
    restockable: DataTypes.BOOLEAN,
    vendor_order_unit: DataTypes.STRING,
    vendor_case_pack: DataTypes.INTEGER,
    moq: DataTypes.INTEGER,
    buffer_days: DataTypes.INTEGER,
    minimum_level: DataTypes.INTEGER,
    product_url: DataTypes.STRING,
    note_for_next_order: DataTypes.STRING,
    case_pack: DataTypes.INTEGER,
    pieces_per_internal_box: DataTypes.INTEGER,
    boxes_per_case: DataTypes.INTEGER,
    tags_info: DataTypes.STRING,
    tag1: DataTypes.STRING,
    tag2: DataTypes.STRING,
    tag3: DataTypes.STRING,
    tag4: DataTypes.INTEGER,
    hazmat: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    ignore_until: DataTypes.DATE,
    notes: DataTypes.STRING
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["core_number"]
      }
    ]
  }
  );

  Product.associate = (models) => {
      // Product.belongsTo(models.Location,{
      //   foreignKey:'product_code',
      //   // onDelete:'CASCADE'
      // })
  };

  return Product;
};