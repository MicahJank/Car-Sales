import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import allReducers from './reducers';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(allReducers);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
