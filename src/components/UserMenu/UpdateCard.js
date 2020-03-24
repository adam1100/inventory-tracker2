import React from 'react';

const updateCard = (props) => {
    let cardTypeStyle = "update-card";
    if(props.update.type === "request"){
        cardTypeStyle = "update-card--req"
    }
    if(props.update.type === "loan"){
        cardTypeStyle = "update-card--loan"
    }

    return(
    <div onClick={props.cl} className={cardTypeStyle}> 
        <p>update type: {props.update.type}</p>
        <p>inventory: {props.update.inventory}</p>
        <p>item: {props.update.itemDescription}</p>
        <p>by: {props.update.requestedBy}</p>
    </div>
    );
}

export default updateCard;