import React, { createContext, useReducer } from 'react';

import rootReducer from './reducers';

export const Store = createContext();

const initState = {
    userReducer: {
        authUser: null
    },
    lang: 'en',
    postReducer: {
        posts: []
    }
};

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(rootReducer, initState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>
        {props.children}
    </Store.Provider>
}