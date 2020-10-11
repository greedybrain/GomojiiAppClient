//! BUILT IN OR PACKAGE
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

//! CUSTOM
import Logo from '../../../Global/components/Logo'
import '../../../Assets/sideNavContainer.css'
import { filterEmojis, resetResults, showOther } from '../../../Store/emojis'

const SideNavContainer = () => {
        const dispatch = useDispatch()
        const state = useSelector(state => ({
                emojis: state.emojisRed.emojis,
                loading: state.emojisRed.loading,
        }))
        // const IS_1330_ABOVE = useMediaQuery({minWidth: 1330})
        // const IS_BETWEEN_1200_1329 = useMediaQuery({ minWidth: 1200, maxWidth: 1329 })
        // const IS_BETWEEN_1000_1199 = useMediaQuery({ minWidth: 1000, maxWidth: 1199 })
        // const IS_BETWEEN_800_999 = useMediaQuery({ minWidth: 800, maxWidth: 999 })
        const IS_AT_LEAST_1000 = useMediaQuery({ maxWidth: 1000 })

        const filterByOther = () => {
                let other = state.emojis.filter(emoji => 
                        (!emoji.attributes.subGroup.includes('animal')) &&
                        (!emoji.attributes.subGroup.includes('hand')) &&
                        (!emoji.attributes.subGroup.includes('hand-')) &&
                        (!emoji.attributes.subGroup.includes('body-parts')) && 
                        (!emoji.attributes.subGroup.includes('clothing')) &&
                        (!emoji.attributes.subGroup.includes('emotion')) && 
                        (!emoji.attributes.subGroup.includes('flag')) &&
                        (!emoji.attributes.subGroup.includes('food')) && 
                        (!emoji.attributes.subGroup.includes('drink')) && 
                        (!emoji.attributes.subGroup.includes('gesture')) &&
                        (!emoji.attributes.subGroup.includes('music')) &&
                        (!emoji.attributes.subGroup.includes('person')) && 
                        (!emoji.attributes.subGroup.includes('role')) && 
                        (!emoji.attributes.subGroup.includes('plant')) && 
                        (!emoji.attributes.subGroup.includes('face')) && 
                        (!emoji.attributes.subGroup.includes('symbol')) &&
                        (!emoji.attributes.subGroup.includes('transport')) && 
                        (!emoji.attributes.subGroup.includes('place')) && 
                        (!emoji.attributes.subGroup.includes('zodiac')) &&
                        (!emoji.attributes.subGroup.includes('family')) && 
                        (!emoji.attributes.subGroup.includes('sky-weather')) &&
                        (!emoji.attributes.subGroup.includes('person-sport'))
                )
                dispatch(showOther(other))
        } 

        return (
                <div className="side_nav_container">
                        <ul>
                                <li className="logo_item">
                                        <Logo />
                                </li>
                                <li 
                                        className="smileys cat" 
                                        onClick={() => dispatch(filterEmojis(state.emojis, ['face']))} 
                                        style={{ margin: '0 auto', padding: '0' }}
                                >
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="smileys">
                                                        😇
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Smileys
                                        </div>
                                </li>
                                <li className="animals cat" onClick={() => dispatch(filterEmojis(state.emojis, ['animal']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="animals">
                                                        🦁
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Animals & Bugs
                                        </div>
                                </li>
                                <li className="body_parts cat" onClick={() => dispatch(filterEmojis(state.emojis, ['hand', 'hand-', 'body-parts']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="body parts">
                                                        🖕🏽
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Body Parts
                                        </div>
                                </li>
                                <li className="clothing_and_acc cat" onClick={() => dispatch(filterEmojis(state.emojis, ['clothing']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="clothing and acc">
                                                        👗
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Clothing & Acc
                                        </div>
                                </li>
                                <li className="emoticons cat" onClick={() => dispatch(filterEmojis(state.emojis, ['emotion']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="emoticons">
                                                        ❤️
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Emoticons
                                        </div>
                                </li>
                                <li className="family cat" onClick={() => dispatch(filterEmojis(state.emojis, ['family']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="family">
                                                        👫🏼
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Family
                                        </div>
                                </li>
                                <li className="flags cat" onClick={() => dispatch(filterEmojis(state.emojis, ['flag']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="flags">
                                                        🇺🇸
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Flags
                                        </div>
                                </li>
                                <li className="food_and_drink cat" onClick={() => dispatch(filterEmojis(state.emojis, ['food', 'drink']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="food and drink">
                                                        🍔
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Food & Drink
                                        </div>
                                </li>
                                <li className="gestures cat" onClick={() => dispatch(filterEmojis(state.emojis, ['gesture']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="gestures">
                                                        🤷🏾‍♂️
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Gestures
                                        </div>
                                </li>
                                <li className="music cat" onClick={() => dispatch(filterEmojis(state.emojis, ['music']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="music">
                                                        🎸
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null} >
                                                Music
                                        </div>
                                </li>
                                <li className="people_and_roles cat" onClick={() => dispatch(filterEmojis(state.emojis, ['person', 'role', '-holding']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="people and roles">
                                                        🧑🏽‍🍳
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                People
                                        </div>
                                </li>
                                <li className="plants cat" onClick={() => dispatch(filterEmojis(state.emojis, ['plant']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="plants">
                                                        🌵
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Nature
                                        </div>
                                </li>
                                <li className="sports cat" onClick={() => dispatch(filterEmojis(state.emojis, ['person-sport']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="sports">
                                                        ⛹️‍♀️
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Sports
                                        </div>
                                </li>
                                <li className="symbols cat" onClick={() => dispatch(filterEmojis(state.emojis, ['symbol']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="symbols">
                                                        🏧
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Symbols
                                        </div>
                                </li>
                                <li className="transport cat" onClick={() => dispatch(filterEmojis(state.emojis, ['transport']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="transport">
                                                        🏍️
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Transport
                                        </div>
                                </li>
                                <li className="travel_and_places cat" onClick={() => dispatch(filterEmojis(state.emojis, ['place']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="travel and places">
                                                        🌎
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Travel & Places
                                        </div>
                                </li>
                                <li className="weather cat" onClick={() => dispatch(filterEmojis(state.emojis, ['sky-weather']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="weather">
                                                        🌈
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Weather
                                        </div>
                                </li>
                                <li className="zodiacs cat" onClick={() => dispatch(filterEmojis(state.emojis, ['zodiac']))} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="zodiac">
                                                        ♏
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Zodiac
                                        </div>
                                </li>
                                <li className="misc cat" onClick={filterByOther} style={{ margin: '0 auto', padding: '0' }}>
                                        <div className="emojicon" style={IS_AT_LEAST_1000 ? { margin: '0 auto', paddingTop: '10px', fontSize: '1.7rem' } : null}>
                                                <span role="img" aria-label="misc">
                                                        ➕
                                                </span>
                                        </div>
                                        <div className="cat_name" style={IS_AT_LEAST_1000 ? {display: 'none'} : null}>
                                                Other
                                        </div>
                                </li>
                        </ul>
                </div>                
        )
}

export default SideNavContainer
