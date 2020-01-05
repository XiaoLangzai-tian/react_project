import React, { Component } from 'react'
import { Redirect,Switch} from 'react-router-dom';
import {LayoutRoutes} from './router'
import routerEach from './utils/routerEach'
import Layout from './layout'

export default class App extends Component {
  render() {
    return (
      <Switch>
          <Layout>
            <Redirect from="/" to="/home"  exact/>
            {routerEach(LayoutRoutes)}
          </Layout>
      </Switch>
    )
  }
}

