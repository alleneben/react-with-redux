import { createStore, compose } from 'redux';
import rootReducers from './reducer';

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, withDevTools())
