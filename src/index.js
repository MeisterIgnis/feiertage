import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/outout.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    
document.getElementById('root'));


