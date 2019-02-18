import { all } from 'redux-saga/effects'
import {sagaHelloWorld} from './saga-hello-world';

export function* rootSaga(){
	yield all([
		sagaHelloWorld(),
	])
}