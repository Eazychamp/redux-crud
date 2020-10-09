import React, { Component } from 'react';
import UserForm from './registerForm';
import AllUsers from './AllUsers';
import Login from './loginForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
render() {
  return (
    <div className="App">
      <Router>
      <div >
        <ul >
          <li className='pr-5'>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/all-users">All Users</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
        </ul>

        <hr />

        <Switch>
          <Route exact path="/register">
            <UserForm />
          </Route>
          <Route path="/all-users">
            <AllUsers />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
  }
}
export default App;