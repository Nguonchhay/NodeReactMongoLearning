import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../views/pages/HomePage';
import AboutPage from '../views/pages/AboutPage';
import ContactUsPage from './../views/pages/ContactUsPage';
import {
    URL_HOME,
    URL_ABOUT_US,
    URL_CONTACT_US
} from './../constants';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={URL_HOME} component={HomePage} exact />
                <Route path={URL_ABOUT_US} component={AboutPage} exact />
                <Route path={URL_CONTACT_US} component={ContactUsPage} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;