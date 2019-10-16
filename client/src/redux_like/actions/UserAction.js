import axios from 'axios';
import { FETCH_USERS_DETAIL } from './../ActionType';

export const fetchUserDetailAsync = async (dispatch) => {
    const response = await axios.get('https://my-json-server.typicode.com/typicode/demo/profile');
    return dispatch({
        type: FETCH_USERS_DETAIL,
        payload: response.data
    });
}