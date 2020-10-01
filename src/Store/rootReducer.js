import { combineReducers } from 'redux'
import authReducer from './auth'
import emojisReducer  from './emojis'


const rootReducer = combineReducers({
        emojisRed: emojisReducer,
        authRed: authReducer
})

export default rootReducer