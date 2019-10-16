import { FETCH_USERS_DETAIL } from '../ActionType';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS_DETAIL:
            return {
                ...state,
                authUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;