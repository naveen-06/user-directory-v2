import * as actionType from './userActionType';

export function loginUser(email) {
  return{
    type: actionType.LOGIN_USER,
    payload: email
  };
}

export function logout() {
  return{
    type: actionType.LOG_OUT
  }
}

export function signup(newUser) {
  return{
    type: actionType.SIGNUP,
    payload: newUser
  };
}