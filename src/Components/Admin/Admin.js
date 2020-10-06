import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser , setLoggedInUser] =  useContext(UserContext)
    return (
        <div>
      <h1>Hi! Mr.{loggedInUser.name} ,You can control from here</h1>      
        </div>
    );
};

export default Admin;