import { FETCH_POSTS, USER_LOGIN } from './ActionType';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case USER_LOGIN:
            return {
                ...state,
                authUser: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;