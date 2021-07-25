import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Signin from './Signin'
import Signup from './Signup'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
