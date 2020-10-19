//! BUILT IN OR PACKAGE
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//! CUSTOM
import { searchEmojis } from '../../../Store/emojis'

const SearchForm = () => {
        const [query, setQuery] = useState('')
        const emojis = useSelector(state => state.emojisRed.emojis)
        const dispatch = useDispatch()

        const handleChange = event => {
                setQuery(event.target.value)
        }

        const handleSubmit = event => {
                event.preventDefault()
                dispatch(searchEmojis(emojis, query))
                setQuery('')
        }

        return (
                <form onSubmit={handleSubmit}>
                        <div className="search_bar_area">
                                <div className="search_bar">
                                        <input 
                                                type="search" 
                                                name="search" 
                                                placeholder="✍️  Search emojis"
                                                value={query}
                                                onChange={handleChange}
                                                className="mode_change"
                                        />
                                </div>
                                <div className="submit_btn mode_change">
                                        <button><span role="img" aria-label="Submit">🔍</span></button>
                                </div>
                        </div>
                </form>
        )
}

export default SearchForm
