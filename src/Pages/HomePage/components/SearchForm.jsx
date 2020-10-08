//! BUILT IN OR PACKAGE
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//! CUSTOM
import emojiData from '../../../Data/emojis-data.min'
import { filterEmojis } from '../../../Store/emojis'

const SearchForm = () => {
        const [query, setQuery] = useState('')
        const emojis = useSelector(state => state.emojisRed.emojis)
        const dispatch = useDispatch()

        const handleChange = event => {
                setQuery(event.target.value)
        }

        const handleSubmit = event => {
                event.preventDefault()
                let results = emojiData.filter(emoji => 
                        emoji.slug.includes(query.toLowerCase()) ||
                        emoji.slug === query.toLowerCase() ||
                        emoji.unicodeName.includes(query.toLowerCase()) ||
                        emoji.unicodeName === query.toLowerCase()
                )
                dispatch(filterEmojis(results))
                setQuery('')
        }

        return (
                <form onSubmit={handleSubmit}>
                        <div className="search_bar_area">
                                <div className="search_bar">
                                        <input 
                                                type="search" 
                                                name="search" 
                                                placeholder="✍️   emoji keywords (i.e cat, dog)"
                                                value={query}
                                                onChange={handleChange}
                                        />
                                </div>
                                <div className="submit_btn">
                                        <button><span role="img" aria-label="Submit">🔍</span></button>
                                </div>
                        </div>
                </form>
        )
}

export default SearchForm
