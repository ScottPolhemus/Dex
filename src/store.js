import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunkMiddleware
  ]
  
  const enhancers = [
    applyMiddleware(...middlewares)
  ]
  
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  
  
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  
  return store
}