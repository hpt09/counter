import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import  thunk  from 'redux-thunk';
import reducer from './reducers/Reducer';
import App from './components/App.js';


var store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
