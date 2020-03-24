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
    <table className="inner-table">
        <thead>
        <tr>
            <th>Item ID</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
            {tableContents}
        </tbody>
    </table>
    );
}

export default inventoryTable;