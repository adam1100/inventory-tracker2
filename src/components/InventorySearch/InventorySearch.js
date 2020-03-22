import React from 'react';

import SearchResults from './SearchResults/SearchResults'

const inventorySearch = (props) => {
    
    return(
        <div className="inventory-search">
            {!props.showResult ? <p>Inventory Search</p> : <p></p> } 
            {/* Hide paragraph when user searched */}

            <input type="text" onChange = { props.inputChange } />
            <button className="btn" onClick = { props.clicked }> Search </button>

            {props.showResult ? <SearchResults 
                                results = { props.searchResult } 
                                clicked = { props.clickedInventory }
                                tableData = { props.tableData }
                                formHandler = {props.formHandler} 
                                formChanged = {props.formChanged}
                                formInput = {props.formInput}/>
                                : <p></p> }
            {/* Show results when user searched */}
        </div>
    );
}

export default inventorySearch;