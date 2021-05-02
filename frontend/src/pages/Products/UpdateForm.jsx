import React , {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';


function UpdateFormComponent(props){

    const [validated, setValidated] = useState(false);
    const [formOperation,setFormOperation] = useState(null)
    const [formQuantity, setFromQuantity] = useState(0);
    const [formLocationIndex, setFormLocationIndex] = useState(null);
    // const 

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity() === false || formLocationIndex === null || formOperation === null || formOperation === 0) {
    //   setValidated(false);
        
      }else{
        setValidated(true);
        props.updateLocation(formLocationIndex,formQuantity,formOperation);
        //   console.log(formLocationIndex,formOperation,formQuantity)

      }
  
    };

    const handleFormLocation = (e) => {
        console.log(e)
        setFormLocationIndex(e.target.value)

    }

    const handleFormOperation = (e) => {
        setFormOperation(e.target.value)
    }

    const handleFormQuantity = (e) => {
        setFromQuantity(e.target.value)
    }


    return(
        <Row>
            <Col xs={10} className="mx-auto">
                <Form
                    style={{width:"500px"}}
                    validated={validated}
                    onSubmit={handleSubmit}
                    noValidate 
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Location:
                            <span className="ml-2 text-primary">{(formLocationIndex !== null)?((props.locations[formLocationIndex] === null || props.locations[formLocationIndex] === undefined)?"":props.locations[formLocationIndex].quantity) : ""}</span>
                        </Form.Label>
                        <Form.Control required size="sm" as="select"
                            isInvalid={formLocationIndex === null}
                            onChange={handleFormLocation}
                        >
                            <option value={null}>Select Location</option>
                            {props.locations.map((e,index) => {
                                return (
                                    <option key={index} value={index}>{e.location}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control isInvalid={formQuantity === 0} required size="sm" type="number" onChange={handleFormQuantity} value={formQuantity} placeholder="Quantity to be added or deducted" />
                    </Form.Group>
                    <fieldset>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            inline
                            label="Add"
                            type="radio"
                            size="sm"
                            // required
                            value={1}
                            onChange={handleFormOperation}
                            isInvalid={formOperation === null}
                            name="formRadio"
                            id="formRadio1"
                        />
                        <Form.Check
                            inline
                            label="Subtract"
                            type="radio"
                            size="sm"
                            // required
                            value={2}
                            onChange={handleFormOperation}
                            isInvalid={formOperation === null}
                            name="formRadio"
                            id="formRadio2"
                        />
                    </Form.Group>
                    </fieldset>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default UpdateFormComponent;