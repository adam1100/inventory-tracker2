import React from 'react';
import itemRequestForm from './itemRequestForm'

const itemTableRow = (props) => {
    
    return(
    <tr>
        <td>{props.content.id}</td>
        <td>{props.content.description}</td>
        {/* <RequestForm 
        formHandler = {props.formHandler}
        formChanged = {props.formChanged}
        formInput = {props.formInput}/> */}
    </tr>
    );
}

export default itemTableRow;