//! REDUCER
const initialState = {
        emojis: [],
        emojisLoading: false
}

export const emojisReducer = (state = initialState, action) => {
        switch(action.type) {
                case LOAD_EMOJIS_REQUEST: 
                        return {
                                ...state, 
                                emojisLoading: true
                        }
                case ADD_LOADED_EMOJIS:
                        return {
                                ...state,
                                emojis: action.payload.emojis,
                                emojisLoading: false
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

export const addLoadedEmojis = emojis => ({ // adding emojis after loading is finished
        type: ADD_LOADED_EMOJIS,
        payload: {
                emojis
        }
})
