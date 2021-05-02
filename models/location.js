'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location',{
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true

    },
    warehouse: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    product_code: {
      type:DataTypes.STRING,
      // allowNull:false,
    },
    location: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  },{
    indexes: [
      {
        unique: true,
        fields: ["id"]
      }
    ]
  });

  Location.associate = (models) =>{
    // Location.hasMany(models.Product,{
    //   foreignKey:'product_code',
    //   as:'products'
    // });
  };

  return Location;
};