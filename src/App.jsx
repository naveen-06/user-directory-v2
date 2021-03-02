import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './containers/LoginScreen/LoginScreen';
import Signup from './containers/SignupScreen/SignupScreen';
import HomeScreen from './containers/HomeScreen/HomeScreen';

function App() {
  return(
    <div>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/home' exact component={HomeScreen}/>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;