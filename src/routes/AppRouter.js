import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route path='/' component={DashboardRoutes} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
