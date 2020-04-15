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
    buttons.push(<button className="menu-btn" onClick={() => props.clicked('Add')} key={""}>add an inventory</button>)


    return(
        <div className = "menu">
            {buttons}
            <form>
                <label>
                    InventoryName:
                    <input type="text" name="name" />
                </label>
                <label>
                    InventoryId:
                    <input type="text" name={"name"}/>
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}



export default userMenu;