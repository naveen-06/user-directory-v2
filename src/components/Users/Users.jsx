import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Users.scss';
import User from '../User/User';
import { UserContext } from '../../context/userContext';

function Users() {
  const { users } = useContext(UserContext);

  return(
    <div className='users'>
      <div className='table__heading'>
        <p className='header'>S.No</p>
        <p className='header'>Email</p>
        <p className='header'>Phone</p>
        <p className='header'>City</p>
        <p className='header'>State</p>
      </div>
      {
        users.map((user, i) => (
          <User key={uuidv4()} user={user} id={i}/>
        ))
      }
    </div>
  );
}

export default Users;