import React from 'react';
import InventoryTable from './InventoryTable';

const inventoryResult = (props) => {
    let table = undefined;
    let showTable = false;
    if (props.tableData.id == props.inventoryDetails.id){
        table = <InventoryTable tableData = {props.tableData}/>
        showTable = true;
    }
    
    return(
    <div className="row border">
        <div onClick={props.clicked}>
            <p className="col-1-of-3">{props.inventoryDetails.id}</p>
            <p className="col-1-of-3">{props.inventoryDetails.description}</p>
            <p className="col-1-of-3">{props.inventoryDetails.user}</p>
        </div>
        {showTable ? table : <p></p>}
    </div>
    );
}

export default inventoryResult;