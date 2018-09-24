import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './Screens/App';
import About from './Screens/About';
import LoginContainer from './Screens/LoginContainer';
import SignupContainer from './Screens/SignupContainer';


let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/signup' component={SignupContainer} />
        </Switch>
    </HashRouter>

export default Router;