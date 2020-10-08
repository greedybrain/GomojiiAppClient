//! REDUCER
const initialState = {
        emojis: [],
        results: [],
        loading: false
}

export default function emojisReducer(state = initialState, action) {
        switch(action.type) {
                case REQUESTING_EMOJIS:
                        return {
                                ...state,
                                loading: true
                        }
                case LOAD_EMOJIS:
                        return {
                                ...state,
                                emojis: action.payload.emojis,
                                loading: false
                        }
                case FILTER_EMOJIS_REQUEST:
                        return {
                                ...state,
                                loading: true
                        }
                case FILTER_EMOJIS:
                        return {
                                ...state,
                                results: action.payload.emojis,
                                loading: false
                        }
                default:
                        return state






















        }
}

//! TYPES 
const LOAD_EMOJIS = "LOAD_EMOJIS"
const REQUESTING_EMOJIS = "REQUESTING_EMOJIS"
const FILTER_EMOJIS = "FILTER_EMOJIS"
const FILTER_EMOJIS_REQUEST = "FILTER_EMOJIS_REQUEST"

//! CREATORS
export const requestingEmojis = () => ({
        type: REQUESTING_EMOJIS
})

export const loadEmojis = emojis => ({ // adding emojis after loading is finished
        type: LOAD_EMOJIS,
        payload: {
                emojis
        }
})

export const filterEmojisRequest = () => ({
        type: FILTER_EMOJIS_REQUEST
})

export const filterEmojis = emojis => ({
        type: FILTER_EMOJIS,
        payload: {
                emojis
        }
})
