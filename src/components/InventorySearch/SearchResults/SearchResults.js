import React from 'react';

import InventoryResult from './InventoryResult/InventoryResult';

const SearchResults = (props) => {
    //console.log(props.results)
    const inventoryResultList = props.results.map( result => {
        return <InventoryResult
                inventoryDetails = { result }
                key = { result.id }
                clicked = { () => props.clicked(result.id) }
                tableData = { props.tableData }
                formHandler = {(itemId) => props.formHandler(result.id, itemId)}
                formChanged = {props.formChanged}
                formInput = {props.formInput}/>
        });

    return(
    <table className="outer-table">
        <thead>
        <tr>
            <th>Inventory Name</th>
            <th>Description</th>
            <th>Owner</th>
        </tr>
        </thead>
        <tbody>
        {inventoryResultList}
        </tbody>
    </table>
    );
}

export default SearchResults;