import React from 'react';

import './Modal.scss';
import Button from '../Button/Button';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';

function Modal({ click }) {
  return(
    <div className='popup'>
      <div className='overlay'/>
      <div className='modal'>
        <p>Registration successful</p>
        <CheckIcon className='check__icon'/>
        <div className='btn__container'>
          <Button click={click}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;