import { SWITCH_LANGUAGE } from './actionType';


export const switchLanguage = language => ({
    type: SWITCH_LANGUAGE,
        payload: {
            language
        }
});