import React from 'react';
import RequestForm from './RequestForm'

const tableRow = (props) => {
    
    return(
    <div className="row border">
        <p className="col-1-of-2">{props.content.id}</p>
        <p className="col-1-of-2">{props.content.description} <RequestForm/></p>
    </div>
    );
}

export default tableRow;