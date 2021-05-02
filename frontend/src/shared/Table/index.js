import {Table} from 'react-bootstrap';

export function TableComponent(props){
    return(
        <Table responsive className='rtable bradius12'>
            <thead className='border-0'>
                <tr className='border-0'>
                    {props.columns.map(e=>{
                        return <th className='border-top-0 font12 text-formgray1' key={e}>{e}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </Table>
    );
}

export default TableComponent;