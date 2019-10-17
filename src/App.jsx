import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthState from './context/auth/AuthState'

import Dashboard from './views/Dashboard/Dashboard'
import Users from './views/Users/Users'
import Elis from './views/Elis/Elis'
import Rizki from './views/Rizki/Rizki'

import './styles/antd.css'
import "./styles/main.scss"

const App = () => {

  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/elis' component={Elis} />
          <Route exact path='/rizki' component={Rizki} />
        </Switch>
      </Router>
    </AuthState>

  );
}


export default App;
