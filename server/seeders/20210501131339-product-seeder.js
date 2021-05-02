'use strict';

const csv = require('csv-parser');
const fs = require('fs');

var querryParameter = ()=> new Promise( resolve =>{
  let datum = []
  fs.createReadStream("./server/data/products.csv")
    .pipe(csv())
    .on('data', async (row) => {
      
      datum.push(
        {
          core_number:row["Core Number"],
          internal_title:row["Internal Title"],
          vendor:row["Vendor"],
          vendor_title:row["Vendor's Title"],
          vendor_sku:row["Vendor SKU"],
          backup_vendor:row["Backup Vendor"],
          backup_vendor_sku:row["Backup Vendor SKU"],
          restockable:row["Restockable"],
          vendor_order_unit:row["Vendor Order Unit"],
          vendor_case_pack:row["Vendor Case Pack"],
          moq:row["MOQ (Pieces)"],
          buffer_days:(row["Buffer Days"]!=="")?parseInt(row["Buffer Days"]):null,
          minimum_level:row["Minimum Level"],
          product_url:row["Product URL"],
          note_for_next_order:row["Note for Next Order"],
          case_pack:(row["Case Pack (Pieces)"]!=="")?parseInt(row["Case Pack (Pieces)"]):null,
          pieces_per_internal_box:(row["Pieces Per Internal Box"] !== "")?row["Pieces Per Internal Box"]:null,
          boxes_per_case:(row["Boxes per Case"]!== "")?row["Boxes per Case"]:null,
          tags_info:row["Tags & Info"],
          tag1:row["Tag 1"],
          tag2:row["Tag 2"],
          tag3:row["Tag 3"],
          tag4:(row["Tag 4"]!=="")?parseInt(row["Tag 4"]):null,
          hazmat:row["Hazmat"],
          active:row["Active"],
          ignore_until:row["Ignore Until"],
          notes:row["Notes"],
          createdAt:new Date(),
          updatedAt:new Date()
        }
      )
    })
    .on('end', () => {
      // console.log('CSV file successfully processed');
      // console.log(datum)
      resolve(datum)
    });
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datum = [];
    await querryParameter().then((res)=>datum = res)

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await console.log(datum,"here")
    await queryInterface.bulkInsert('Products',datum,{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products',null,{})
  }
};
