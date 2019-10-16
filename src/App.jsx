import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthState from './context/auth/AuthState'

import Home from './views/Home/Home'
import Users from './views/Users/Users'


import './scss/antd.css'
import "./scss/main.scss"

const App = () => {

  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
        </Switch>
      </Router>
    </AuthState>

  );
}


export default App;
