import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../views/pages/HomePage';
import AboutPage from '../views/pages/AboutPage';
import {
    URL_HOME,
    URL_ABOUT_US
} from './../constants';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={URL_HOME} component={HomePage} exact />
                <Route path={URL_ABOUT_US} component={AboutPage} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;