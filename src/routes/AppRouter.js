import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Software from '../pages/Software'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route path='/software' component={Software} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
