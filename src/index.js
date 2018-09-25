import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import initialState from './InitState';



let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let app = <Provider store={store}>
    <Router />
</Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
