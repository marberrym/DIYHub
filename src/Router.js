import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './pagescreens/App';
import About from './pagescreens/About';
import LoginContainer from './pagescreens/LoginContainer';
import SignupContainer from './pagescreens/SignupContainer';
import SingleScreen from './pagescreens/SingleScreen';
import NotFound from './pagescreens/NotFound';
import BrowseScreen from './pagescreens/BrowseScreen';
import PostNewContainer from './pagescreens/PostNewContainer';
import MyProjectsScreen from './pagescreens/MyProjectsScreen';
import injectUser from './components/inject-user';
import EditProjectScreen from './pagescreens/EditProjectScreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (this.props.toast !== prevProps.toast && this.props.toast !== null) {
            toast[this.props.toast.type](this.props.toast.text);
            this.props.dispatch({
                type: 'SET_TOAST',
                toast: null
            });
        }
    }
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/login' component={LoginContainer} />
                        <Route exact path='/signup' component={SignupContainer} />
                        <Route exact path='/browse' component={BrowseScreen} />
                        <Route exact path='/project/:projectid' component={SingleScreen} />
                        <Route exact path='/post' component={PostNewContainer}/>
                        <Route exact path='/my-projects' component={MyProjectsScreen} />
                        <Route exact path='/editproject/:projectid' component={EditProjectScreen} />
                        <Route path="/*" component={NotFound} />
                    </Switch>
                </HashRouter>
                <ToastContainer />
            </div>
        )
    }
}  
    

export default connect(state => 
    ({toast: state.toast}))(injectUser(Router));