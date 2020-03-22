import React from 'react';

import InventoryResult from './InventoryResult/InventoryResult';

const SearchResults = (props) => {
    //console.log(props.results)
    const inventoryResultList = props.results.map( result => {
        return <InventoryResult
                inventoryDetails = { result }
                key = { result.id }
                clicked = { () => props.clicked(result.id) }
                tableData = { props.tableData }/>
        });

    return(
    <div>
        <div className="row">
            <p className="col-1-of-3">inventory name</p>
            <p className="col-1-of-3">description</p>
            <p className="col-1-of-3">owner</p>
        </div>
        {inventoryResultList}
    </div>
    );
}

export default SearchResults;