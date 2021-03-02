import React, { useContext, useState } from 'react';
import validator from 'validator';

import './LoginScreen.scss';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';

import { UserContext } from '../../context/userContext';
import { UserDispatchContext } from '../../context/userContext';
import { loginUser } from '../../reducer/userActions';

function Login({ history }) {
  const { users } = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const [isValid, setIsValid] = useState('');
  const [userDetail, setUserDetail] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    setIsValid('');

    const { name, value } = e.target;

    setUserDetail(pstate => ({
      ...pstate,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let { email, password } = userDetail;
    email = email.toLocaleLowerCase();

    if (!email) return setIsValid('*Please enter email');
    
    if (!validator.isEmail(email)) return setIsValid('*Please enter a valid email');

    if (!password) return setIsValid('*Please enter password');

    const currentUser = users.find(user => user.email === email);

    if (!currentUser) return setIsValid('*No user with this email address');

    if (currentUser.password !== password) return setIsValid('*Incorrect password');

    dispatch(loginUser(email));
    setUserDetail('');
    history.replace('/home');
  }

  function gotoSignup() {
    history.push('/signup');
  }

  return(
    <div className='login'>
      <div className='heading'>
        <h2>Welcome back</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <InputField type="text" name='email' change={handleChange} placeholder="Email" value={userDetail.email}autoFocus />
        <InputField type="password" name='password' change={handleChange} placeholder="Password" value={userDetail.password}/>
        {isValid && <p className='error__msg'>{isValid}</p>}
        <div className='btn__container'>
          <Button type='submit'>Login</Button>
        </div>
      </form>
      <div className="to__signup">
        <p>Don't have an account? <span className='signup__link' onClick={gotoSignup}>Signup here</span></p>
      </div>
    </div>
  );
}

export default Login;