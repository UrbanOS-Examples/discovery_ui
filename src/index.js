import 'normalize.css'
import DiscoveryUI from './App.js'
import sagas from './store/sagas'
import { reducers } from './store/reducers'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

const Redux = {
  start: (reducerMap = {}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const sagaMiddleware = createSagaMiddleware()

    const mergedReducers = Object.assign({}, reducers, reducerMap)

    const store = createStore(combineReducers(mergedReducers), composeEnhancers(applyMiddleware(sagaMiddleware)))

    sagaMiddleware.run(sagas)

    return store
  }
}

const WrappedApp = () => {
  const store = Redux.start()

  return (
    <Provider store={store}>
      <DiscoveryUI />
    </Provider>)
}
export default WrappedApp
