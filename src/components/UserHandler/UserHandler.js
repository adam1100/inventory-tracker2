import React from 'react';
import UserLogin from './UserLogin/UserLogin';
import UserRegister from './UserRegister/UserRegister';

const userHandler = (props) => {

    return(
    <div> 
        <UserLogin/>
        <hr/>
        <UserRegister/>
    </div>
    );

}

export default userHandler;