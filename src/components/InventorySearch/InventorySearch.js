import React from 'react';

import SearchResults from './SearchResults/SearchResults'

const inventorySearch = (props) => {

    let searchSectionStyle = "search-section--compact";
    if (props.showResult)
        searchSectionStyle = "search-section--expand"
    
    return(
        <div>

            <div className={searchSectionStyle}>
                {!props.showResult ? <p className="search-section--header">Find an Inventory</p> : [] } 
                {/* Hide paragraph when user searched */}

                <div className="search-bar">
                    <input type="text" onChange = { props.inputChange } />
                    <button onClick = { props.clicked }> Search </button>
                </div> 
            </div>

            {props.showResult ? <SearchResults 
                                results = { props.searchResult } 
                                clicked = { props.clickedInventory }
                                tableData = { props.tableData }
                                formHandler = {props.formHandler} 
                                formChanged = {props.formChanged}
                                formInput = {props.formInput}/>
                                : [] }
            {/* Show results when user searched */}
        </div>
    );
}

export default inventorySearch;