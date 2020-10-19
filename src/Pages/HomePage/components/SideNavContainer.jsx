//! BUILT IN OR PACKAGE
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//! CUSTOM
import Logo from '../../../Global/components/Logo'
import '../../../Assets/sideNavContainer.css'
import { filterEmojis, showOther } from '../../../Store/emojis'

const SideNavContainer = () => {
        const dispatch = useDispatch()
        const state = useSelector(state => ({
                emojis: state.emojisRed.emojis,
                loading: state.emojisRed.loading,
        }))

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
                                
                                >
                                        <div className="emojicon">
                                                <span role="img" aria-label="smileys">
                                                        😇
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Smileys
                                        </div>
                                </li>
                                <li className="animals cat" onClick={() => dispatch(filterEmojis(state.emojis, ['animal']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="animals">
                                                        🦁
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Animals & Bugs
                                        </div>
                                </li>
                                <li className="body_parts cat" onClick={() => dispatch(filterEmojis(state.emojis, ['hand', 'hand-', 'body-parts']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="body parts">
                                                        ✌🏼
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Body Parts
                                        </div>
                                </li>
                                <li className="clothing_and_acc cat" onClick={() => dispatch(filterEmojis(state.emojis, ['clothing']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="clothing and acc">
                                                        👗
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Clothing & Acc
                                        </div>
                                </li>
                                <li className="emoticons cat" onClick={() => dispatch(filterEmojis(state.emojis, ['emotion']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="emoticons">
                                                        ❤️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Emoticons
                                        </div>
                                </li>
                                <li className="family cat" onClick={() => dispatch(filterEmojis(state.emojis, ['family']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="family">
                                                        👫🏼
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Family
                                        </div>
                                </li>
                                <li className="flags cat" onClick={() => dispatch(filterEmojis(state.emojis, ['flag']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="flags">
                                                        🇺🇸
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Flags
                                        </div>
                                </li>
                                <li className="food_and_drink cat" onClick={() => dispatch(filterEmojis(state.emojis, ['food', 'drink']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="food and drink">
                                                        🍔
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Food & Drink
                                        </div>
                                </li>
                                <li className="gestures cat" onClick={() => dispatch(filterEmojis(state.emojis, ['gesture']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="gestures">
                                                        🤷🏾‍♂️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Gestures
                                        </div>
                                </li>
                                <li className="music cat" onClick={() => dispatch(filterEmojis(state.emojis, ['music']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="music">
                                                        🎸
                                                </span>
                                        </div>
                                        <div className="cat_name" >
                                                Music
                                        </div>
                                </li>
                                <li className="people_and_roles cat" onClick={() => dispatch(filterEmojis(state.emojis, ['person', 'role', '-holding']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="people and roles">
                                                        🧑🏽‍🍳
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                People
                                        </div>
                                </li>
                                <li className="plants cat" onClick={() => dispatch(filterEmojis(state.emojis, ['plant']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="plants">
                                                        🌵
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Nature
                                        </div>
                                </li>
                                <li className="sports cat" onClick={() => dispatch(filterEmojis(state.emojis, ['person-sport']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="sports">
                                                        ⛹️‍♀️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Sports
                                        </div>
                                </li>
                                <li className="symbols cat" onClick={() => dispatch(filterEmojis(state.emojis, ['symbol']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="symbols">
                                                        🏧
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Symbols
                                        </div>
                                </li>
                                <li className="transport cat" onClick={() => dispatch(filterEmojis(state.emojis, ['transport']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="transport">
                                                        🏍️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Transport
                                        </div>
                                </li>
                                <li className="travel_and_places cat" onClick={() => dispatch(filterEmojis(state.emojis, ['place']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="travel and places">
                                                        🌎
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Travel & Places
                                        </div>
                                </li>
                                <li className="weather cat" onClick={() => dispatch(filterEmojis(state.emojis, ['sky-weather']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="weather">
                                                        🌈
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Weather
                                        </div>
                                </li>
                                <li className="zodiacs cat" onClick={() => dispatch(filterEmojis(state.emojis, ['zodiac']))}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="zodiac">
                                                        ♏
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Zodiac
                                        </div>
                                </li>
                                <li className="misc cat" onClick={filterByOther}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="misc">
                                                        ➕
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Other
                                        </div>
                                </li>
                        </ul>
                </div>                
        )
}

export default SideNavContainer
