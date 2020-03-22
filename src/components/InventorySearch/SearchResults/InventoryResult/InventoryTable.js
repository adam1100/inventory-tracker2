import React from 'react';
import TableRow from './TableRow'

const inventoryTable = (props) => {

    const tableContents = props.tableData.contents.map(content => {
        return <TableRow 
                content={ content }
                formHandler = {() => props.formHandler(content.id)}
                formChanged = {props.formChanged}
                formInput = {props.formInput}
                key = {content.id} />
    });
    
    return(
    <div>
        <div className="row">
            <p className="col-1-of-2">index</p>
            <p className="col-1-of-2">description</p>
        </div>
        {tableContents}
    </div>
    );
}

export default inventoryTable;