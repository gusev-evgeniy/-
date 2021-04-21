import { combineReducers, createStore } from 'redux'
import { AuthReducer } from './AuthReducer'

const reducers = combineReducers({
  AuthReducer
})

export const store = createStore(reducers)