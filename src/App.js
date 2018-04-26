import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import AuthComponent from './AuthComponent';

const App = (props) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router >
            <Switch >
                <Route exact path="/" render={() => <div>You are home!</div>} />
                <Route path="/auth/:view" component={AuthComponent} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Redirect to="/" />
            </Switch>
        </Router>
    </div>
);
export default App;
