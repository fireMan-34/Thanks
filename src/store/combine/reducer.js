import {AddDataOne,AddDataTwo} from './type';
import {combineReducers} from 'redux';
const one=(state=['1'],action)=>{
    switch(action.type){
        case AddDataOne:
        return [...state,action.props];
        default:return state;
    }    
};
const two=(state=['2'],action)=>{
    switch(action.type){
        case AddDataTwo:
        return [...state,action.props];
        default:return state;
    }
};
export const combineReducer=combineReducers({one,two});