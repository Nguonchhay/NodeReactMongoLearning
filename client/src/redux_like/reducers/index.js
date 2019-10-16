import postReducer from './postReducer';
import userReducer from './userReducer';

/**
 * Combine all reducers
 * 
 * @param {*} reducer 
 */
const combineReducers = reducer => {
    return (state = {}, action) => {
        const keys = Object.keys(reducer);
        const nextReducers = {};
        for (let i = 0; i < keys.length; i++) {
            const invoke = reducer[keys[i]](state[keys[i]], action);
            nextReducers[keys[i]] = invoke;
        }
        return nextReducers;
        };
};

const rootReducer = combineReducers({
    postReducer,
    userReducer
});

export default rootReducer;