import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import {NoLayoutRoutes} from './router'
import routerEach from './utils/routerEach'
import App from './App';

ReactDOM.render(
    <Router>
        <Switch>
            {routerEach(NoLayoutRoutes)}
            <Route component={App} />
        </Switch>
    </Router>, 
    document.getElementById('root')

);

