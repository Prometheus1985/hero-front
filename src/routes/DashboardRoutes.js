import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Software from '../pages/Software'

const DashboardRoutes = () => {
  return (
    <>
      <Switch>
        <Route path='/software' component={Software} />
        <Route path='/home' component={Home} />
        <Redirect to='/login' />
      </Switch>
    </>
  )
}

export default DashboardRoutes
