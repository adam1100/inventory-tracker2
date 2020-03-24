import React from 'react';
import UserLogin from './UserLogin/UserLogin';
import UserRegister from './UserRegister/UserRegister';

const userHandler = (props) => {

    return(
    <div className="user-section"> 
        <UserLogin/>
        <UserRegister/>
    </div>
    );

}

export default userHandler;