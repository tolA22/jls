import axios from "axios";

/**
 * Returns a paginated data of all products in the inventory
 * @param {*} currentPage current page number
 * @param {*} coreNumber optional core_number for search purposes
 * @returns 
 */
const getProductListings = async (currentPage,coreNumber) => {

    try{
        let res =  axios
                    .get(`/api/products?currentPage=${currentPage}&coreNumber=${encodeURIComponent(coreNumber)}`)

        return res;

    }catch(error){
        throw error
    }
  
    
};


export {
    getProductListings,
};
