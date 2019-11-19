import { SWITCH_LANGUAGE } from './../actions/actionType';
import { LANG_EN } from './../../constants';

const initState = {
    language: LANG_EN
};

const languageReducer = (state = initState, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {
                ...state,
                language: action.payload.language
            }
        default:
            return state
    }
}

export default languageReducer;