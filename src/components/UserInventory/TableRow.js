import React from 'react';

const tableRow = (props) => {
    let statusStyle = "default";
    if(props.content.status === "requested")
        statusStyle = "requested";
    
    if(props.content.status === "on loan")
        statusStyle = "loan";

    return(





    <tr className={statusStyle}>
        <td>{props.content.id}</td>
        <td>{props.content.description}</td>
    </tr>
    );
}

export default tableRow;