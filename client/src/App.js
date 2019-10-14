import React from 'react';

import './sass/app.scss';
import AppRouter from './components/AppRouter';
import { Store } from './redux_like/Store';

const App = () => {
  const {state} = React.useContext(Store);
  console.log(state);

  return (
    <AppRouter />
  )
}

export default App;
