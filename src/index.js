import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Screens/App';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';

let app = <Router><App/></Router>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
