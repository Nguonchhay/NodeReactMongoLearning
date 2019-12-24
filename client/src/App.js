import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import {
    URL_HOME,
    URL_ABOUT_US,
    URL_CONTACT_US
} from './constants';

import './sass/app.scss';


const App = () => (
  <Router>
    <Switch>
        <Route path={URL_HOME} component={HomePage} exact />
        <Route path={URL_ABOUT_US} component={AboutPage} exact />
        <Route path={URL_CONTACT_US} component={ContactUsPage} exact />
    </Switch>
  </Router>
)

export default App;
