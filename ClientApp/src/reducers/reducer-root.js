import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ReducerHelloWorld from './reducer-hello-word';

const rootReducer = combineReducers({
    routing: routerReducer,
    reducerHelloWorld: ReducerHelloWorld
});

export default rootReducer;