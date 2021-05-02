'use strict';

const csv = require('csv-parser');
const fs = require('fs');

var querryParameter = ()=> new Promise( resolve =>{
  let data = [];
    fs.createReadStream("./server/data/locations.csv")
    .pipe(csv())
    .on('data', (row) => {
      data.push(
        {
          warehouse:row["Warehouse"],
          product_code:row["Product Code"],
          location:row["Location"],
          quantity:row["Quantity"],
          createdAt:new Date(),
          updatedAt:new Date()

        }
      )
    })
    .on('end', () => {
      // console.log('CSV file successfully processed');
      resolve(data)

    });
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let data = []
    await querryParameter().then((res)=>data = res)
    await queryInterface.bulkInsert('Locations',data,{});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
