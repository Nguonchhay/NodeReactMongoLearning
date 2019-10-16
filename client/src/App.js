import React, { useContext, useEffect } from 'react';

import './sass/app.scss';
import AppRouter from './components/AppRouter';
import { Store } from './redux_like/Store';

import { fetchPostsAsync, fetchUserDetailAsync } from './redux_like/actions';

const App = () => {
  const {state, dispatch} = useContext(Store);
  console.log(state);

  const fetchPostHandle = () => {
    return fetchPostsAsync(dispatch);
  }

  const fetchUserDetailHandle = () => {
    return fetchUserDetailAsync(dispatch);
  }
  
  useEffect(() => {
    state.postReducer.posts.length === 0 && fetchPostHandle();

    state.userReducer.authUser === null && fetchUserDetailHandle();
  });

  return (
    <AppRouter />
  )
}

export default App;
