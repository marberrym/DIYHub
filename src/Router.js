import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './Screens/App';
import About from './Screens/About';
import LoginContainer from './Screens/LoginContainer';
import SignupContainer from './Screens/SignupContainer';
import SingleScreen from './Screens/SingleScreen';
import NotFound from './Screens/NotFound';
import BrowseScreen from './Screens/BrowseScreen';


let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/signup' component={SignupContainer} />
            <Route exact path='/browse' component={BrowseScreen} />
            <Route exact path='/project/:projectid' component={SingleScreen} />
            <Route path="/*" component={NotFound} />
        </Switch>
    </HashRouter>

export default Router;