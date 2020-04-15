import React from 'react';
import TableRow from './TableRow'

const inventoryTable = (props) => {
    console.log('props', this.props.tableData)
    const tableContents = props.tableData.contents.map(content => {
        return <TableRow 
                content={ content }
                //formHandler = {() => props.formHandler(content.id)}
                //formChanged = {props.formChanged}
                //formInput = {props.formInput}
                //key = {content.id} 
                />
    });
    
    return(
    <div>
    <div className="orange-leg"/>
    <p className="leg">: requested </p>
    <div className="yellow-leg"/>
    <p className="leg">: on loan </p>
    <p>table</p>
     <table className="user-table">
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
    <div className="pair--table">
        <p>Item ID</p><input onChange={props.changeID}/>
    </div>
    <div className="pair--table">
        <p>Description</p><input onChange={props.changeDesc}/>
    </div>
    <button onClick={props.add}className="menu-btn--table">Add Item</button> 

    </div>
    );
}

export default inventoryTable;