import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './screens/App';
import About from './screens/About';
import LoginContainer from './screens/LoginContainer';
import SignupContainer from './screens/SignupContainer';
import SingleScreen from './screens/SingleScreen';
import NotFound from './screens/NotFound';
import BrowseScreen from './screens/BrowseScreen';
import PostContainer from './screens/PostContainer';


let Router = () =>
     <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/signup' component={SignupContainer} />
            <Route exact path='/browse' component={BrowseScreen} />
            <Route exact path='/project/:projectid' component={SingleScreen} />
            <Route exact path='/post' component={PostContainer}/>
            <Route path="/*" component={NotFound} />
        </Switch>
    </HashRouter>
    
    

export default Router;