const Product = require('../models').Product;
const {Op} = require('sequelize');

/**
 * returns a paginated response of all products in the inventory
 * @param {*} req , currentPage - current page number, coreNumber - product's core number for search (optional) 
 * @param {*} res 
 */
const pagination = async (req,res) => {
    try{
        let currentPage = parseInt(req.query.currentPage);
        let coreNumber = decodeURIComponent(req.query.coreNumber);
        const LIMIT_NUMBER = 25;
        let offsetNumber = (currentPage - 1)* LIMIT_NUMBER;

        if(Number.isInteger(currentPage) === false || currentPage < 1)
            throw new Error("Invalid current page number");

        
        let searchResult = await Product.findAndCountAll({
            where:{
                core_number:{
                    [Op.substring]:coreNumber,
                }
            },
            distinct:true,
            offset:offsetNumber,
            limit:LIMIT_NUMBER,
            order:[["createdAt","DESC"]]
        })

        if(searchResult.rows === null || searchResult.rows.length === 0 ){
            res.status(404).json({
                message:"Result not found"
            });
        }

        res.status(200).json({
            message:'Products fetched successfully',
            data:searchResult.rows,
            lastPage:Math.ceil(searchResult.count/25),
            total:searchResult.count
        });

        
    }catch(error){
        res.status(500).send(error)
    }
}




module.exports =  {
    pagination
}
