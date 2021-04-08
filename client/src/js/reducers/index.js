import {combineReducers} from 'redux'
import userReducer from './userReducer'
import annanceReducer from './annanceReducer'
import get_info from './infoUser'
export default combineReducers({userReducer,annanceReducer,get_info})