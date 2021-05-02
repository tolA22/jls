import axios from "axios";


/**
 * Returns locations associated with a product
 * @param {*} coreNumber core_number of the product to be fetched
 * @returns 
 */
const getProductLocations = async (coreNumber) => {

    try{
        let res =  axios
                    .get(`/api/locations/${encodeURIComponent(coreNumber)}`)

        return res;

    }catch(error){
        throw error
    }
  
    
};

/**
 * Updates the quantity of a unique location and product_number
 * @param {*} id unique id of the location and product_number to be updated
 * @param {*} quantity new quantity value
 * @returns 
 */
const updateLocationQuantity = function(id, quantity) {
  
    try{
        let res = axios
                .put(`/api/location/${id}`, {
                quantity
                });
        return res;
    }catch(error){
        throw error
    }
};

export {
    getProductLocations,
    updateLocationQuantity
};
