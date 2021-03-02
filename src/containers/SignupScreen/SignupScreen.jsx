import React, { useState, useContext } from 'react';
import validator from 'validator';

import './SignupScreen.scss';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { UserContext } from '../../context/userContext';
import { UserDispatchContext } from '../../context/userContext';
import { signup } from '../../reducer/userActions';

function Signup({ history }) {  
  const { users } = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState('');
  const [userDetail, setUserDetail] = useState({
    email: '',
    password: '',
    phone: '',
    city: '',
    state: ''
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

    let { email, password, phone, city, state } = userDetail;
    email = email.toLocaleLowerCase();

    if (!email) return setIsValid('*Please enter email');
    
    if (!validator.isEmail(email)) return setIsValid('*Please enter a valid email');

    if (!password) return setIsValid('*Please enter password');

    if (password.length < 6) return setIsValid('*Password length minimum 6 characters');

    if (!phone || phone.length < 10) return setIsValid('*Please enter a valid phone number');

    if (!city || !state) return setIsValid('*Please enter city and state');

    const currentUser = users.find(user => user.email === email);

    if (currentUser) return setIsValid('*Account already exists');

    dispatch(signup(userDetail));
    setShowModal(true);
    setUserDetail({
      email: '',
      password: '',
      phone: '',
      city: '',
      state: ''
    });
  }

  function gotoLogin() {
    history.push('/login');
  }

  function continueSignin() {
    setShowModal(false);
    history.replace('/home');
  }

  return(
    <React.Fragment>
      {showModal && <Modal click={continueSignin} />}
      <div className='signup'>
        <div className='heading'>
          <h2>Create Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField type="text" name='email' change={handleChange} value={userDetail.email} placeholder="Email" autoFocus/>
          <InputField type="text" name='password' change={handleChange} value={userDetail.password} placeholder="New Password" />
          <InputField type="number" name='phone' change={handleChange} value={userDetail.phone} placeholder="Phone" />
          <InputField type="text" name='city' change={handleChange} value={userDetail.city} placeholder="City" />
          <InputField type="text" name='state' change={handleChange} value={userDetail.state} placeholder="State" />
          {isValid && <p className='error__msg'>{isValid}</p>}
          <div className='btn__container'>
            <Button type='submit'>Create Account</Button>
          </div>
        </form>
        <div className="to__login">
          <p>Already have an account? <span className='login__link' onClick={gotoLogin}>Login here</span></p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;