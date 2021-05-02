
const Location = require('../models').Location;


/**
 * fetches all locations associated with a product_number
 * @param {*} req 
 * @param {*} res 
 */
const getLocations = async (req,res) => {
    try{
        let id = decodeURIComponent(req.params.id);


        
        let searchResult = await Location.findAll({
            where:{
                product_code:id
            },
            order:[["createdAt","DESC"]]
        })

        if(searchResult === null || searchResult.length === 0 ){
            res.status(404).json({
                message:"Result not found"
            });
        }

        res.status(200).json({
            message:'Locations fetched successfully',
            data:searchResult
        });

        
    }catch(error){
        res.status(500).send(error)
    }
}

/**
 * update the quantity associated with a location and the product_number
 */
const updateQuantity = async (req,res) => {
    try{
        let id = (req.params.id);
        let quantity = req.body.quantity

        
        let searchResult = await Location.findByPk(id)

        if(searchResult === null || searchResult.length === 0 ){
            res.status(404).json({
                message:"Result not found"
            });
        }

        searchResult.quantity = quantity;
        await searchResult.save();

        res.status(200).json({
            message:'Location updated successfully',
            data:searchResult
        });

        
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}


module.exports =  {
    getLocations,
    updateQuantity
}
