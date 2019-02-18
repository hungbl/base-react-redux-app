import Immutable from 'immutable';
import * as c from '../constants/constant';

const initialState = Immutable.fromJS({
    message: 'hello world'
})

export default (state = initialState, action) => {
    switch (action.type) {
        case c.HELLO_WORLD:
            return state.set('mode', action.payload);
    }
    return state;
}