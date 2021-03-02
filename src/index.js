import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import { UserContextProvider } from './context/userContext';

const app = (
  <UserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);

ReactDOM.render(
  app,
  document.getElementById("root")
);