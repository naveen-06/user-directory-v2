import * as actionType from './userActionType';

function userReducer(state, action) {
  switch(action.type) {
    case actionType.LOGIN_USER:
      return {
        ...state,
        currentUser: state.users.find(user => user.email === action.payload)
      };
    case actionType.LOG_OUT:
      return {
        ...state,
        currentUser: null
      };
    case actionType.SIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state;
  }
}

export { userReducer };