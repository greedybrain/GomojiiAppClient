//! BUILT IN OR PACKAGE
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//! CUSTOM
import { filterEmojis } from '../../../Store/emojis'

const SearchForm = ({ isAtLeast799 }) => {
        const [query, setQuery] = useState('')
        const emojis = useSelector(state => state.emojisRed.emojis)
        const dispatch = useDispatch()

        const handleChange = event => {
                setQuery(event.target.value)
        }

        const handleSubmit = event => {
                event.preventDefault()
                let results = emojis.filter(emoji => 
                        emoji.attributes.slug.includes(query.toLowerCase()) ||
                        emoji.attributes.slug === query.toLowerCase() ||
                        emoji.attributes.unicodeName.includes(query.toLowerCase()) ||
                        emoji.attributes.unicodeName === query.toLowerCase()
                )
                dispatch(filterEmojis(results))
                setQuery('')
        }

        return (
                <form onSubmit={handleSubmit}>
                        <div className="search_bar_area" style={isAtLeast799 ? { height: '40px' } : null }>
                                <div className="search_bar">
                                        <input 
                                                type="search" 
                                                name="search" 
                                                placeholder="✍️   emoji keywords (i.e cat, dog)"
                                                value={query}
                                                onChange={handleChange}
                                                className="mode_change"
                                                style={isAtLeast799 ? { display: '1rem' } : null }
                                        />
                                </div>
                                <div className="submit_btn mode_change">
                                        <button style={isAtLeast799 ? { display: '1rem' } : null }><span role="img" aria-label="Submit">🔍</span></button>
                                </div>
                        </div>
                </form>
        )
}

export default SearchForm
