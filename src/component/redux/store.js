import {createStore, applyMiddleware} from 'redux'
import { combineReducers } from 'redux'
import Reducers from './kfc/KfcReducers'
import PizzaReducers from './pizza/PizzaReducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'



const rootReducer = combineReducers({
   kfc : Reducers,
   pizza : PizzaReducers
})

// const store = createStore(rootReducer, applyMiddleware(logger))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store