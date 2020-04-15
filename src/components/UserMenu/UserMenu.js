import React from 'react';

const userMenu = (props) => {


    const buttons = props.inventories.map( inventory => 
                                            <button 
                                            className = {props.selected === inventory ? "menu-btn--selected": "menu-btn"}
                                            onClick={() => props.clicked(inventory)}
                                            key = {inventory}>
                                            {inventory}</button>);

    buttons.unshift(<button className="menu-btn" onClick={() => props.clicked('')} key = {""}>Overview</button>);
    buttons.unshift(<p className="menu-heading">Inventories</p>)
    return(
        <div className = "menu">
            {buttons}
        </div>
        );
}

export default userMenu;