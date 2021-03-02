import { useEffect, createContext, useReducer } from 'react';

import usersInitialData from '../dev-data/dev-data';
import { userReducer } from '../reducer/userReducer';

const userLocalStorage = JSON.parse(window.localStorage.getItem('users'));

const initialState = {
  users: userLocalStorage || usersInitialData,
  currentUser: null
};

export const UserContext = createContext();
export const UserDispatchContext = createContext();


export function UserContextProvider(props) {
  const [users, dispatch] = useReducer(userReducer, initialState);
  
  useEffect(() => {
    window.localStorage.setItem('users',  JSON.stringify(users.users));
  }, [users.users]);

  return(
    <UserContext.Provider value={users}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
