import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiReducer } from './api';
const store = createStore(combineReducers({ apiItems: apiReducer }), applyMiddleware(thunk));
export default store;