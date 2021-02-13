import { types } from '../types/types'

const initialState = {
  logged: false,
  name: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.login:
      return {
        logged: true,
        name: action.payload.name,
      }
    case types.logout:
      return {
        logged: false,
      }

    default:
      return state
  }
}

export default authReducer
