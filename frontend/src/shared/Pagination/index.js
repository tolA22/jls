/**
 * Author: Mubarak
 */
import { Fragment } from 'react';
import {Pagination} from 'react-bootstrap';
import "./Pagination.scss";

export default function PaginationComponent(props){
    const PER_PAGE = 25;
    return(
        <span className='d-inline-flex align-items-center trpagination'>
            {/* {console.log(props.total, props.current)} */}
            {(props.total != null ) && 
                <span className="text-formgray2 font12 px-2">Showing {((props.current-1)* PER_PAGE) + 1}-{((PER_PAGE*props.current)) > props.total ? props.total : ((PER_PAGE*props.current))} of {props.total} item(s)</span>
            }
            
            {((props.current === 0)||(props.total === undefined)) &&
                <span className="text-formgray2 font12 px-2">Showing  0 of 0 item(s)</span>
            }
            <span>
            <Pagination className="m-auto rpagination">
                {buildPagination(props.current,props.lastPage,props)}
            </Pagination>
            </span>
        </span>
    )
}

export function buildPagination(current=1,total=1,props){
    // let count = total-1;
    current = parseInt(current)
    total = parseInt(total)
    let tags=[]


    const START_VALUE = 1;
    const FIRST_FIVE =  5;
    const LAST_THREE  =3 ;
    const NEXT_TWO = 2;

    let i = START_VALUE;
    let showEllipse = true;
    let showEllipse2 = false;
    let limit = START_VALUE;


    if(total <= FIRST_FIVE){
        i = START_VALUE;
        limit=total
        showEllipse = false;
    }else if(current > total - LAST_THREE){
        limit = total
        i = total - LAST_THREE;
        showEllipse = false;
        showEllipse2 = true
    }else{
        // console.log("eher",i)
        if(current <= LAST_THREE){
            i = START_VALUE
            limit = current === START_VALUE?current + NEXT_TWO:current+START_VALUE
        }else{
            // console.log("heree")
            i = current - START_VALUE >= START_VALUE ? current - START_VALUE : START_VALUE;
            limit = current === START_VALUE?current + NEXT_TWO:current+START_VALUE
            showEllipse2 = true;
        }
    }

    

    // push the first
    tags.push(

        <Fragment key="pfb">
            <Pagination.Prev key={'a'} disabled={current===START_VALUE?true:false} onClick={current===START_VALUE?undefined:props.prevItem}/>
        </Fragment>
    )

    if(showEllipse2){
        tags.push(
            <Fragment key="flabss">
                <Pagination.Item key={i} onClick={props.changeItem}>{START_VALUE}</Pagination.Item>
                <Pagination.Ellipsis key={'pbas'} disabled/>
            </Fragment>
        )
    }
    // console.log("i,limit,total",i,limit,total)
    while(i <= limit && i <= total){
        tags.push(
            <Pagination.Item key={i} disabled={i === current ? true:false} active={i === current?true:false} onClick={i === current? undefined: props.changeItem}>{i}</Pagination.Item>
        )
        i++;
    }

    if(showEllipse){
        tags.push(
            <Fragment key="flas">
                <Pagination.Ellipsis key={'p'} disabled/>
                <Pagination.Item key={i} onClick={props.changeItem}>{total}</Pagination.Item>
            </Fragment>
        )
    }

    // push the last
    tags.push(

        <Fragment key="plb">
            <Pagination.Next key={'l'} disabled={current===total?true:false} onClick={current===total?undefined:props.nextItem}/>
        </Fragment>
    )







    return tags;
    
}