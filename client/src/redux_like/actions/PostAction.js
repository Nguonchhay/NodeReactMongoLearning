import axios from 'axios';
import { FETCH_POSTS } from './../ActionType';

export const fetchPostsAsync = async (dispatch) => {
    const response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    return dispatch({
        type: FETCH_POSTS,
        payload: response.data
    });
}