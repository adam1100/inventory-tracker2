import React from 'react';

const userLogin = (props) => {
    
    return(
    <div className="login">
        <p className="heading-login">Manage an Inventory</p>
        <div className="pair">
            <p>Username</p><input/>
        </div>
        <div className="pair">
            <p>Password</p><input/>
        </div>
        <button className="usrBtn">Login</button>
    </div>
    );
}

export default userLogin;