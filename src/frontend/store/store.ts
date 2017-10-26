import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/root_reducer'
import StoreState from '../types/store_types'

const configureStore = (preloadedState: StoreState) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))

export default configureStore
