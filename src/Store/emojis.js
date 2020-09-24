import { act } from "react-dom/test-utils"

//! REDUCER
const initialState = {
        emojis: [],
        emojisLoading: false
}

export const movieReducer = (state = initialState, action) => {
        switch(action.type) {
                case LOAD_EMOJIS_REQUEST: 
                        return {
                                ...state, 
                                emojisLoading: true
                        }
                default:
                        return state
        }
}

//! TYPES 
const LOAD_EMOJIS_REQUEST = "LOAD_EMOJIS_REQUEST"
const ADD_LOADED_EMOJIS = "ADD_LOADED_EMOJIS"
const SEARCH_FOR_EMOJI = "SEARCH_FOR_EMOJI"
const FILTER_EMOJIS_BY_CATEGORY = "FILTER_EMOJIS_BY_CATEGORY"

//! CREATORS
export const loadEmojisRequest = () => ({ //loading emojis begin
        type: LOAD_EMOJIS_REQUEST
})

export const addLoadedEmojis = emojis => ({
        
})
