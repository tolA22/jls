import React, { useEffect ,useState } from 'react';
import {Container,Row,Col,Modal, InputGroup, FormControl} from 'react-bootstrap';

// shared components
import PaginationComponent from '../../shared/Pagination';
import TableComponent from '../../shared/Table';
import SpinnerComponent from '../../shared/Loader';
// data components
import ResultComponent from './Result';
import ModalComponent from './Modal';

// requests
import {getProductListings} from '../../requests/product';
import {getProductLocations,updateLocationQuantity} from '../../requests/location'


function ProductsComponent(){

    const columns = ['CORE NUMBER','INTERNAL TITLE','VENDOR','ACTIVE','CREATED AT','ACTION'];

    const [current,setCurrent] = useState(1);
    const [lastPage,setLastPage] = useState(1);
    const [total,setTotal] = useState(1);
    const [results,setResults] = useState([]);
    const [tempProductNumber,setTempProductNumber] = useState("");
    const [productNumber,setProductNumber] = useState("")
    const [currentProductNumber,setCurrentProductNumber] = useState("");
    const [viewModal,setViewModal] = useState(false);
    const [locations, setLocations] = useState([]);
    const [currentProduct, setCurrentProduct] = useState();
    const [spinner, setSpinner] = useState(false);

    const changeProductNumber = (e) => {
        setTempProductNumber(e.target.value);
    }

    const searchProductNumber = () => {
        setProductNumber(tempProductNumber);
    }

    /**
     * Call the update request api and updates the changes on success
     * @param {*} index index of the location in the locations array to be updated
     * @param {*} quantity new quantity to be updated
     * @param {*} type  type of operation to be performed i.e addition or subtraction
     */
    const updateLocation = async (index,quantity,type) => {
        try{
            setSpinner(true);

        // perform conversion and calculation
        let location = locations[index];
        if(location === null || location=== undefined)
            throw "Location error";
        let value = parseInt(location.quantity.split(',').join(""))
        
        type = parseInt(type)
        if(type === 1){
            // addition
            value += parseInt(quantity)
        }else{
            // subtraction
            value -= parseInt(quantity)
        }

        if(value < 0)
            throw "Invalid Quantity"

        value = (value).toString()
        
        //send requiest
        let res = await updateLocationQuantity(location.id,value);

        // update the locations object
        let tempLocations = [...locations]
        tempLocations[index].quantity = (value);
        setLocations(tempLocations);


        setSpinner(false);



        }catch(error){
            setSpinner(false);

            // throw error
            alert(error)
        }
    }

    /**
     * Updates the current page value
     * @param {*} e current pagination item element
     */
    const changeItem = (e) => {
        setCurrent(e.target.innerText)
    }

    /**
     * Updates the current page value
     */
    const prevItem = () => {
        if(current -1 >= 1){
            setCurrent(current-1)
        }
    }

    /**
     * updates the current page value
     */
    const nextItem = () => {
        if(current + 1 <= lastPage){
            setCurrent(parseInt(current)+1)
        }
    }

    /**
     * fetches location details associated with a particular core_number
     * @param {*} coreNumber core_number to be queried
     * @param {*} index index of the product in the data array to enable local updates per session
     */
    const viewProduct = async (coreNumber,index) => {
        try{
            setSpinner(true);

            // fetch data
            let res = await getProductLocations(coreNumber);

            // set the locationsData
            setLocations(res.data.data)

            // setCurrentProductNumber
            setCurrentProductNumber(coreNumber)

            // setCurrentProduct
            setCurrentProduct(results[index]);

            // open modal
            setViewModal(true)

            setSpinner(false);
            

        }catch(error){
            // setCurrentProductNumber
            setCurrentProductNumber(coreNumber)

            // setCurrentProduct
            setCurrentProduct(results[index]);

            setViewModal(true)

            setLocations([])

            setSpinner(false);

            // alert(error)
        }
    } 

    /**
     * Fetches the paginated list of products and update the lastPage and total Pages
     * @param {*} tcurrent currentpage value
     * @param {*} tproductNumber optional- product_number
     */
    const search = async (tcurrent=current,tproductNumber=productNumber) => {
        try{
            setSpinner(true);
            let res = await getProductListings(tcurrent,tproductNumber);
            res = res.data
            let lastPage = res.lastPage
            let total = res.total
            let data = res.data
            let message = res.message

            setLastPage(parseInt(lastPage))
            setTotal(parseInt(total))
            setResults(data);
            setSpinner(false);

        }catch(error){
            setSpinner(false);

            alert(error);
        }
    }


    useEffect(()=>{
        if(current === 1){
            search(current,productNumber)
        }else{
            setCurrent(1)
        }
    },[productNumber]);


    useEffect(()=>{
        search();
    },[current])


    return(
        <Container fluid>
            <Row className="mt-4">
                <Col xs={12} className="text-center my-2">
                Product Listings Table
                </Col>
                <Col xs={10} className="mx-auto my-2">
                    <Row>
                        <Col className="text-left" md={2}>
                            <InputGroup>
                                <FormControl
                                placeholder="Enter Product Number - Case Sensitive"
                                onChange={changeProductNumber}
                                onBlur={searchProductNumber}
                                style={{fontSize:"12px"}}
                                />
                            </InputGroup>
                        </Col>
                        <Col className="text-right">
                            <PaginationComponent current={current} lastPage={lastPage} total={total} changeItem={changeItem} prevItem={prevItem} nextItem={nextItem}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={10} className="mx-auto">
                    <TableComponent columns={columns}>
                        {results.map((e,index) => {
                            return <ResultComponent key={index} index={index} data={e} view={viewProduct}/>
                        })}
                    </TableComponent>
                </Col>
            </Row>
            <ModalComponent viewModal={viewModal} setViewModal={setViewModal} currentProduct={currentProduct} locations={locations} updateLocation={updateLocation}/>
            {spinner && 
                <SpinnerComponent/>
            }
        </Container>
    )
}



export default ProductsComponent;