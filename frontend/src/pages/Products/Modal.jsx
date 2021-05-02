import React from 'react';
import { Fragment } from 'react';
import {Modal,Tabs,Tab,Row,Col} from 'react-bootstrap';

import UpdateFormComponent from './UpdateForm';

function ModalComponent(props){

    /**
     * Calculates the total quantities in the locations array
     * @param {*} data locations object
     * @returns 
     */
    function calculateSum(data){
        let summ = 0
        for(var i = 0; i < data.length;i++){
            let datum = data[i].quantity.split(',');
            datum = datum.join('')
            datum = parseInt(datum)
            summ+=datum
        }
        return summ
    }


    return (
        <Modal
            size="lg"
            show={props.viewModal}
            onHide={() => props.setViewModal(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {props.currentProduct && props.currentProduct.core_number}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(props.currentProduct ) &&
                        <Tabs defaultActiveKey="data" id="uncontrolled-tab-example">
                            <Tab eventKey="data" title="Details">
                                <Row>
                                    {/* <Col xs={12}>
                                        <span>Total Quantity:</span>
                                        <span></span>
                                    </Col> */}
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Core Number:</span>
                                        <span>{props.currentProduct.core_number}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Internal Title:</span>
                                        <span>{props.currentProduct.internal_title}</span>
                                    </Col>
                                    <Col xs={12} sm={3} className="my-2">
                                        <span className="text-primary mr-2">Vendor:</span>
                                        <span>{props.currentProduct.vendor}</span>
                                    </Col>
                                    <Col xs={12} sm={3} className="my-2">
                                        <span className="text-primary mr-2">Vendor SKU:</span>
                                        <span>{props.currentProduct.vendor_sku}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Vendor Title:</span>
                                        <span>{props.currentProduct.vendor_title}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Backup Vendor:</span>
                                        <span>{props.currentProduct.backup_vendor}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Backup Vendor SKU:</span>
                                        <span>{props.currentProduct.backup_vendor_sku}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Vendor Order Unit:</span>
                                        <span>{props.currentProduct.vendor_order_unit}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Vendor Case Pack:</span>
                                        <span>{props.currentProduct.vendor_case_pack}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Restockable:</span>
                                        <span>{props.currentProduct.restockable}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">MOQ:</span>
                                        <span>{props.currentProduct.moq}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Buffer Days:</span>
                                        <span>{props.currentProduct.buffer_days}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Minimum Level:</span>
                                        <span>{props.currentProduct.minimum_level}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Product URL:</span>
                                        <span>{props.currentProduct.product_url}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Case Pack:</span>
                                        <span>{props.currentProduct.case_pack}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Pieces per internal box:</span>
                                        <span>{props.currentProduct.pieces_per_internal_box}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Boxes Per Case:</span>
                                        <span>{props.currentProduct.boxes_per_case}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Tags & Info:</span>
                                        <span>{props.currentProduct.tags_info}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Tag 1:</span>
                                        <span>{props.currentProduct.tag1}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Tag 2:</span>
                                        <span>{props.currentProduct.tag2}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Tag 3:</span>
                                        <span>{props.currentProduct.tag3}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Tag 4:</span>
                                        <span>{props.currentProduct.tag4}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Hazmat:</span>
                                        <span>{props.currentProduct.hazmat}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Active:</span>
                                        <span>{props.currentProduct.active}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Ignore Until:</span>
                                        <span>{props.currentProduct.ignore_until}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Backup Vendor:</span>
                                        <span>{props.currentProduct.backup_vendor}</span>
                                    </Col>
                                    <Col xs={12} sm={12} className="my-2">
                                        <span className="text-primary mr-2">Backup Vendor SKU:</span>
                                        <span>{props.currentProduct.backup_vendor_sku}</span>
                                    </Col>
                                    <Col xs={12} sm={6} className="my-2">
                                        <span className="text-primary mr-2">Notes for next order:</span>
                                        <span>{props.currentProduct.note_for_next_order}</span>
                                    </Col>
                                    <Col xs={12} sm={12} className="my-2">
                                        <span className="text-primary mr-2">Notes:</span>
                                        <span>{props.currentProduct.notes}</span>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="locations" title="Locations">
                                {(props.locations === null || props.locations.length === 0) &&
                                    <Row>   
                                        <Col className="text-center">
                                        <span className="text-warning mr-2">X</span>Locations not available . Search for Core-11312 
                                        </Col>
                                    </Row>
                                }
                                {(props.locations && props.locations.length > 0) &&
                                    <Fragment>
                                        <Row>
                                            <Col xs={12}>
                                                <span className="text-primary mr-2">Total Quantity</span>
                                                <span><b>{calculateSum(props.locations)}</b></span>
                                            </Col>
                                            {props.locations.map((e,index)=>{
                                                return (
                                                    <Fragment key={index}>
                                                        <Col className="my-2"  xs={4}>
                                                            <span className="text-primary mr-2">Warehouse:</span>
                                                            <span>{e.warehouse}</span>
                                                        </Col>
                                                        <Col className="my-2" xs={4}>
                                                            <span className="text-primary mr-2">Location:</span>
                                                            <span>{e.location}</span>
                                                        </Col>
                                                        <Col className="my-2"  xs={4}>
                                                            <span className="text-primary mr-2">Quantity:</span>
                                                            <span>{e.quantity}</span>
                                                        </Col>
                                                    </Fragment>
                                                )
                                            })}
                                        </Row>
                                    </Fragment>
                                }
                            </Tab>

                            <Tab eventKey="update" title="Update Location">
                                {(props.locations === null || props.locations.length === 0) &&
                                    <Row>   
                                        <Col className="text-center">
                                        <span className="text-warning mr-2">X</span>Locations not available . Search for Core-11312 
                                        </Col>
                                    </Row>
                                }
                                {(props.locations && props.locations.length > 0) &&
                                   <Fragment>
                                        <Row>
                                            <Col className="my-2" xs={12}>
                                                {/* <span className="text-primary mr-2">{}</span> */}
                                                {/* <span>{location}</span> */}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <UpdateFormComponent {...props}/>
                                        </Row>
                                    </Fragment>
                                }
                            </Tab>
                        </Tabs>
                    }
                </Modal.Body>
        </Modal>
    )

}



export default ModalComponent;