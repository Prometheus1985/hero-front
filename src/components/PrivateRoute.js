import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Redirect to='/login' />
  }

  return <Route {...props} />
}

export default PrivateRoute
