import React from 'react';
import { mapPropsStream } from 'recompose';

const updateCard = (props) => {
    let cardTypeStyle = "update-card";
    if(props.update.type === "request"){
        cardTypeStyle = "update-card--req"
    }
    if(props.update.type === "loan"){
        cardTypeStyle = "update-card--loan"
    }

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        
    <div onClick={props.cl} className={cardTypeStyle}> 
        <p>update type: {props.update.type}</p>
        <p>inventory: {props.update.inventory}</p>
        <p>item: {props.update.item}</p>
        <p>by: {props.update.requester}</p>
        <p>state: {props.update.state.replace("_", " ")}</p>
        <p>date: {props.update.changed.toLocaleDateString("en-IE", options)} </p>
    </div>
    );
}

export default updateCard;