import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import * as ActionTypes from '../actions/types'
import {app} from '../middleware'
import reducer from '../reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const middleware = applyMiddleware(app, thunk)

export const store = createStore(
  reducer,
  composeEnhancers ? composeEnhancers(middleware) : middleware
)

store.dispatch({type: ActionTypes.APP.INIT})
