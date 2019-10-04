import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from '../views/pages/HomePage';
import AboutPage from '../views/pages/AboutPage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} exact />
            </Switch>
        </Router>
    )
}

export default AppRouter;