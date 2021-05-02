import axios from "axios";

const getProductLocations = async (coreNumber) => {

    try{
        let res =  axios
                    .get(`/api/locations/${encodeURIComponent(coreNumber)}`)

        return res;

    }catch(error){
        throw error
    }
  
    
};


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
