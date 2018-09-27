import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './pagescreens/App';
import About from './pagescreens/About';
import LoginContainer from './pagescreens/LoginContainer';
import SignupContainer from './pagescreens/SignupContainer';
import SingleScreen from './pagescreens/SingleScreen';
import NotFound from './pagescreens/NotFound';
import BrowseScreen from './pagescreens/BrowseScreen';
import PostContainer from './pagescreens/PostContainer';


let Router = () =>
    <HashRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/" render={(routeProps) => 
                <App {...routeProps} {...props} /> }
            />
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