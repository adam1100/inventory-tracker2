import React from 'react';
import InventoryTable from './InventoryTable';

const inventoryResult = (props) => {
    let table = undefined;
    let rowStyle = "row-unselected";
    if (props.tableData.id == props.inventoryDetails.id){
        rowStyle = "row-selected"
    }

    const inventoryResultRow = [   <tr className={rowStyle} onClick={props.clicked}>
                                        <td> {props.inventoryDetails.id}</td>
                                        <td> {props.inventoryDetails.description}</td>
                                        <td> {props.inventoryDetails.user}</td>
                                    </tr>]

    if (props.tableData.id == props.inventoryDetails.id){

        table = 
        <tr>
        <td colspan="100%">
        <InventoryTable 
        tableData = {props.tableData}
        formHandler = {props.formHandler}
        formChanged = {props.formChanged}
        formInput = {props.formInput}/>
        </td>
        </tr>

        inventoryResultRow.push(table);
    }

    return(
        inventoryResultRow
    );
}

export default inventoryResult;