import React from 'react';

const tableRow = (props) => {
    let statusStyle = "default";
    if(props.content.status === "requested")
        statusStyle = "requested";
    
    if(props.content.status === "on loan")
        statusStyle = "loan";

    let properties = Object.keys(props.content).map( (key, index) => {return(<td>{props.content[key]}</td>)});

    return(
    <tr className={statusStyle}>
      {properties}
    </tr>
    );
}

export default tableRow;
