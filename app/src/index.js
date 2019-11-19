import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allRedusers from './reducers';
import './index.css';
import App from './components/App';
import {globalConst} from './global-const';
//import * as serviceWorker from './serviceWorker';

const store = createStore(allRedusers, { appActive: {tab: globalConst.START_ACTIVE_TAB, examMode: globalConst.START_ACTIVE_EXAMODE} });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
