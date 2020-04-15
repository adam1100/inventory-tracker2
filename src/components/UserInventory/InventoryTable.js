import React from 'react';
import TableRow from './TableRow'

const inventoryTable = (props) => {

        const fields = props.tableFields
        const tableHeadings = fields.map( field => {
            return <th>{field}</th>
        });
        const inputForms = fields.map( field => {
            return  <div className="pair--table">
                <p>{field}</p><input name = {field} onChange={props.changeInput}/>
            </div>
        });
        const tableContents = props.tableRows.map(row => {
            return <TableRow fields = {fields}
                             content = {row.column_entries}
                             state = {row.state}/>
        });
    
    return(
    <div>
    <div className="orange-leg"/>
    <p className="leg">: requested </p>
    <div className="yellow-leg"/>
    <p className="leg">: on loan </p>

    <table className="user-table">
        <thead>
        {tableHeadings}
        </thead>
        <tbody>
            {tableContents}
        </tbody>
    </table>
        {inputForms}
        <button onClick={props.add}className="menu-btn--table">Add Item</button>

    </div>
    );
}

export default inventoryTable;