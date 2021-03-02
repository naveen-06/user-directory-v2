import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import './Navbar.scss';
import Button from '../Button/Button';
import { ReactComponent as TeamIcon } from '../../assets/team.svg';
import { UserDispatchContext } from '../../context/userContext';
import { logout } from '../../reducer/userActions';

function Navbar({ history }) {
  const dispatch = useContext(UserDispatchContext);

  function handleLogout() {
    dispatch(logout());
    history.replace('/');
  }

  return(
    <nav className='navbar'>
      <div className='heading'>
        <TeamIcon className='team__icon'/>
        <h3>Users Directory</h3>
      </div>
      <div className='btn__container'>
        <Button click={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);