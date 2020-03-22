import React from 'react';

const inventoryResult = (props) => {
    return(
    <div className="row">
        <p className="col-1-of-3">{props.inventoryDetails.id}</p>
        <p className="col-1-of-3">{props.inventoryDetails.description}</p>
        <p className="col-1-of-3">{props.inventoryDetails.user}</p>
    </div>
    );
}

export default inventoryResult;