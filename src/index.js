import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import rootReducer from './store/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)

ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
