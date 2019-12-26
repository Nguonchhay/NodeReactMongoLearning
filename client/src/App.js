import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IntlProvider } from "react-intl";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import {
    URL_HOME,
    URL_ABOUT_US,
    URL_CONTACT_US
} from './constants';

import './sass/app.scss';

import messagesKM from "./translations/km.json";
import messagesEN from "./translations/en.json";

const messages = {
  km: messagesKM,
  en: messagesEN
};


const App = () => {
  const curLang = useSelector(
    state => state.languageReducer.language
  );

  return (
    <IntlProvider locale={curLang} messages={messages[curLang]}>
      <Router>
        <Switch>
            <Route path={URL_HOME} component={HomePage} exact />
            <Route path={URL_ABOUT_US} component={AboutPage} exact />
            <Route path={URL_CONTACT_US} component={ContactUsPage} exact />
        </Switch>
      </Router>
    </IntlProvider>
  )
}

export default App;
