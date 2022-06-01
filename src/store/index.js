import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {} from './middleware';
import { apiReducer } from './api';
import {combineReducer} from './combine';
const store = createStore(combineReducers({ apiItems: apiReducer ,combine:combineReducer}),
 applyMiddleware(thunk));
export default store;