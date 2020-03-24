import React from 'react';
import UpdateCard from './UpdateCard'

const recentUpdates = (props) => {
    console.log(props)
    const updatesList = props.updates.map( (update, index) => {
        return(<UpdateCard update={update} 
        cl = {() => props.cl(update.inventory, update.itemid, update.type)}
        />)
    });
    updatesList.unshift(<p className="menu-heading">Recent Updates</p>);
    return(updatesList);
}

export default recentUpdates;