import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import shop from './reducers/shop'
import filter from './reducers/filter'

const rootReducer = combineReducers({ shop, filter })
const middleware = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
