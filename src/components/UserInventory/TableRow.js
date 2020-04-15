import React from 'react';

const tableRow = (props) => {
    let statusStyle = "default";
    if(props.state === "requested")
        statusStyle = "requested";
    
    if(props.state === "onLoan")
        statusStyle = "loan";

    let properties = props.fields.map( (field) => {
      return(<td>{props.content[field]}</td>)});

    return(
    <tr className={statusStyle}>
      {properties}
    </tr>
    );
}

export default tableRow;
