import React, { Component } from 'react'
import {HashRouter as Router, Redirect,Switch} from 'react-router-dom';
import {RouteConfig} from './router'
import routerEach from './utils/routerEach'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from='/' to='/home' exact />
          {routerEach(RouteConfig)}
        </Switch>
      </Router>
    )
  }
}

