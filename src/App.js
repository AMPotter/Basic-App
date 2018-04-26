import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = (props) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router >
            <Switch >
                <Route exact path="/" render={() => <div>You are home!</div>} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect to="/" />
            </Switch>
        </Router>
    </div>
);
export default App;
