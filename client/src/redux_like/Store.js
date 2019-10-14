import React, { createContext, useReducer } from 'react';

import rootReducer from './Reducer';

export const Store = createContext();

const initState = {
    authUser: {},
    lang: 'en',
    posts: []
};

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(rootReducer, initState);
    const value = {state, dispatch};

    return <Store.Provider value={value}>
        {props.children}
    </Store.Provider>
}