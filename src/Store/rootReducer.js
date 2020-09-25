import { combineReducers } from 'redux'
import { emojisReducer } from './emojis'

const rootReducer = combineReducers({
        emojisRed: emojisReducer
})

export default rootReducer