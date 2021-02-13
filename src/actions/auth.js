import { types } from '../types/types'

export const loginator = (name) => ({
  type: types.login,
  payload: {
    name,
  },
})
export const logoutator = (n) => ({
  type: types.logout,
  payload: {},
})
