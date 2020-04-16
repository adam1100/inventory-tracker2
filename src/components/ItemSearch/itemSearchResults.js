import React from 'react';
import itemResult from '.ItemResult';

const itemSearchResults = (props) => {
    //console.log(props.results)
    const itemResultList = props.results.map( result => {
        return <ItemResult
                itemDetails = { result }
                key = { result.id }
                clicked = { () => props.clicked(result.id) }
                tableData = { props.tableData }
                formHandler = {(itemId) => props.formHandler(result.id, itemId)}
                formChanged = {props.formChanged}
                formInput = {props.formInput}/>
        });

    return(
    <table className="outer-table">
        <thead>
        <tr>
            <th>Inventory Name</th>
            <th>Description</th>
            <th>Owner</th>
        </tr>
        </thead>
        <tbody>
        {itemResultList}
        </tbody>
    </table>
    );
}

export default itemSearchResults;