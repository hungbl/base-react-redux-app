import * as c from '../constants/constant';

export function helloWorld(data){
	return{
		type: c.HELLO_WORLD,
		payload: data
	};
}