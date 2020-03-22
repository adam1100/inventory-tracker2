import React from 'react';

const requestForm = (props) => {
    
    return(
    <div>
        <input onChange={props.formChanged} value={props.formInput} type="text"/>
        <button onClick={props.formHandler}>Request</button>
    </div>
    );
}

export default requestForm;