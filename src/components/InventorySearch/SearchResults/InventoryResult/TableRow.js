import React from 'react';
import RequestForm from './RequestForm'

const tableRow = (props) => {
    
    return(
    <div className="row border">
        <p className="col-1-of-2">{props.content.id}</p>
        <p className="col-1-of-2">{props.content.description}</p>
        <RequestForm 
        formHandler = {props.formHandler}
        formChanged = {props.formChanged}
        formInput = {props.formInput}/>
    </div>
    );
}

export default tableRow;