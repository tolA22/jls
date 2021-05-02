import React from 'react';
import { Fragment } from 'react';
import {Button} from 'react-bootstrap';

function ResultComponent(props){

    

    return(
        <Fragment>
            <tr key={props.data.core_number}>
                <td className='font12 text-formgray2 border-0'>
                    {props.data.core_number}
                </td>
                <td className='font12 text-formgray2 border-0'>
                    {props.data.internal_title}
                </td>
                <td className='font12 text-formgray2 border-0'>
                    {props.data.vendor}
                </td>
                <td className='font12 text-formgray2 border-0'>
                    {props.data.active}
                </td>
                <td className='font12 text-formgray2 border-0'>
                    {props.data.createdAt}
                </td>
                <td className='font12 text-formgray2 border-0'>
                    <Button className="btn btn-primary font12" onClick={e=>{props.view(props.data.core_number,props.index)}} style={{fontSize:"12px"}}>View</Button>
                </td>
            </tr>

        </Fragment>
    )
}



export default ResultComponent;