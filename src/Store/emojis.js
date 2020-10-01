//! REDUCER
const initialState = {
        emojis: []
}

export default function emojisReducer(state = initialState, action) {
        switch(action.type) {
                case ADD_LOADED_EMOJIS:
                        return {
                                ...state,
                                emojis: action.payload.emojis,
                        }
                default:
                        return state
        }
}

//! TYPES 
const ADD_LOADED_EMOJIS = "ADD_LOADED_EMOJIS"
// const SEARCH_FOR_EMOJI = "SEARCH_FOR_EMOJI"
// const FILTER_EMOJIS_BY_CATEGORY = "FILTER_EMOJIS_BY_CATEGORY"

//! CREATORS
export const addLoadedEmojis = emojis => ({ // adding emojis after loading is finished
        type: ADD_LOADED_EMOJIS,
        payload: {
                emojis
        }
})
