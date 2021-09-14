import {createStore, applyMiddleware} from 'redux'
import rootReducers from './../Reducers';
import {logger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(rootReducers, composeWithDevTools( applyMiddleware(logger) ) );