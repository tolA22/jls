import React from 'react';
import {Spinner} from 'react-bootstrap';
import "./Spinner.scss";

function SpinnerComponent(){


    return(
        <div className="rmodal-spinner">
              <div className="rmodal-spinner-content">
                <Spinner animation="border" />
              </div>
          </div>
    )
}

export default SpinnerComponent;