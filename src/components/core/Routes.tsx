import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
