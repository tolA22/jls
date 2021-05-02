import axios from "axios";

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
