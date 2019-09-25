import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// allReducers is the combined reducers from the index.js inside the reducers folder
import allReducers from './reducers';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// store will now hold all my combined reducers inside this one variable since i am passing in allReducers as the argument
const store = createStore(allReducers);

const rootElement = document.getElementById('root');
ReactDOM.render(
// Provider must have a store prop on it that passes in the store otherwise my state would not be accessible throughout the app
<Provider store={store}>
    <App />
</Provider>
, rootElement);
