import React from 'react';

import classes from '../../style.css'
const inventorySearch = (props) => {
    
    return(
        <div>
            <p>Inventory Search</p>
            <input type="text"/>
            <button className="btn"> Search </button>
        </div>
    );
}

export default inventorySearch;