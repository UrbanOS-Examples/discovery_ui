
import './App.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import DataSetListViewWrapper from './pages/dataset-list-view'
import DatasetView from './pages/dataset-detail-view'
import DatasetVisualizationView from './pages/dataset-visualization-view'
import LoginView from './pages/login-view'

import NetworkLoadingElement from './components/network-loading-element'

import routes from './routes'

const noMatch = () => (
  <Redirect to='/' />
)

const DiscoveryUI = () => (
  <main-app-element>
    <NetworkLoadingElement />
    <Router>
      <Switch>
        <Route exact path={routes.root} component={DataSetListViewWrapper} />
        <Route exact path={routes.datasetView} component={DatasetView} />
        <Route exact path={routes.datasetVisualizationView} component={DatasetVisualizationView} />
        <Route exact path={routes.healthCheck} component={() => <div>Everything is fine</div>} />
        <Route exact path={routes.login} component={LoginView} />
        <Route component={noMatch} />
      </Switch>
    </Router>
  </main-app-element>
)

export default DiscoveryUI
