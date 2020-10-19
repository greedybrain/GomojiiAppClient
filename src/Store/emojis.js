import { act } from "react-dom/test-utils"

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
                                results: action.payload.emojis,
                                loading: false
                        }
                case SEARCH_EMOJIS:
                        return {
                                ...state,
                                results: action.payload.results
                        }
                case FILTER_EMOJIS:
                        return {
                                ...state,
                                results: action.payload.results,
                        }
                case SHOW_OTHER:
                        return {
                                ...state,
                                results: action.payload.results
                        }
                default:
                        return state

        }
}

//! TYPES 
const LOAD_EMOJIS = "LOAD_EMOJIS"
const REQUESTING_EMOJIS = "REQUESTING_EMOJIS"
const FILTER_EMOJIS = "FILTER_EMOJIS"
const SEARCH_EMOJIS = 'SEARCH_EMOJIS'
const SHOW_OTHER = 'SHOW_OTHER'

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

export const filterEmojis = (emojis, categories) => {
        let results = []
        emojis.forEach(emoji => categories.forEach(cat => emoji.attributes.subGroup.includes(cat) ? results.push(emoji) : null))
        return {
                type: FILTER_EMOJIS,
                payload: {
                        results
                }
        }
}

export const searchEmojis = (emojis, query) => ({
        type: SEARCH_EMOJIS,
        payload: {
                results: emojis.filter(emoji => {
                        return (emoji.attributes.slug.includes(query.toLowerCase()) ||
                        emoji.attributes.slug === query.toLowerCase() ||
                        emoji.attributes.unicodeName.includes(query.toLowerCase()) ||
                        emoji.attributes.unicodeName === query.toLowerCase())
                })
        }
})

export const showOther = results => {
        return {
                type: SHOW_OTHER,
                payload: {
                        results
                }
        }
}
