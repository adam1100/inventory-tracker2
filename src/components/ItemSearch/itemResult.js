import React from 'react';
import itemTable from './itemTable';

const itemResult = (props) => {
    let table = undefined;
    let rowStyle = "row-unselected";
    if (props.tableData.id == props.itemDetails.id){
        rowStyle = "row-selected"
    }

    const itemResultRow = [   <tr className={rowStyle} onClick={props.clicked}>
                                        <td> {props.itemDetails.id}</td>
                                        <td> {props.itemDetails.description}</td>
                                        <td> {props.itemDetails.user}</td>
                                    </tr>]

    if (props.tableData.id == props.itemDetails.id){

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

        itemResultRow.push(table);
    }

    return(
        itemResultRow
    );
}

export default itemResult;