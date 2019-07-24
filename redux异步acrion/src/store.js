//react-redux 第一步
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default createStore(rootReducer,applyMiddleware(thunk))
