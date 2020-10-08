//! BUILT IN OR PACKAGE
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import underscore from 'underscore'

//! CUSTOM
import Logo from '../../../Global/components/Logo'
import '../../../Assets/sideNavContainer.css'
import { filterEmojis, filterEmojisRequest } from '../../../Store/emojis'
import { useEffect } from 'react'
// import emojiData from '../../../Data/emojis-data.min'
// import { loadEmojisThunk } from '../../../Store/middleware/emojisThunk'

const SideNavContainer = () => {
        const dispatch = useDispatch()
        const state = useSelector(state => ({
                emojis: state.emojisRed.emojis,
                loading: state.emojisRed.loading,
        }))
        let _ = underscore
        let subGroups = []
        state.emojis.forEach(emoji => subGroups.push(emoji.attributes.subGroup))


        // const getAllEmojis = () => {
        //         dispatch(filterEmojisRequest())
        //         dispatch(filterEmojis(state.emojis))
        // }

        const filterByAnimal = () => {
                dispatch(filterEmojisRequest())
                let animals = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('animal'))
                dispatch(filterEmojis(animals))
        }

        const filterByBodyParts = () => {
                dispatch(filterEmojisRequest())
                let bodyParts = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('hand') ||  emoji.attributes.subGroup.includes('hand-') || emoji.attributes.subGroup.includes('body-parts'))
                dispatch(filterEmojis(bodyParts))
        }

        const filterByClothingAndAcc = () => {
                dispatch(filterEmojisRequest())
                let clothingAndAcc = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('clothing'))
                dispatch(filterEmojis(clothingAndAcc))
        }

        const filterByEmotion = () => {
                dispatch(filterEmojisRequest())
                let emoticons = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('emotion'))
                dispatch(filterEmojis(emoticons))
        }

        const filterByFlags = () => {
                dispatch(filterEmojisRequest())
                let flags = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('flag'))
                dispatch(filterEmojis(flags))
        }

        const filterByFoodAndDrink = () => {
                dispatch(filterEmojisRequest())
                let foodAndDrinks = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('food') || emoji.attributes.subGroup.includes('drink'))
                dispatch(filterEmojis(foodAndDrinks))
        }

        const filterByGestures = () => {
                dispatch(filterEmojisRequest())
                let gestures = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('gesture'))
                dispatch(filterEmojis(gestures))
        }

        const filterByMusic = () => {
                dispatch(filterEmojisRequest())
                let music = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('music'))
                dispatch(filterEmojis(music))
        }      
        
        const filterByPeople= () => {
                dispatch(filterEmojisRequest())
                let people = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('person') || emoji.attributes.subGroup.includes('role') || emoji.attributes.subGroup.includes('-holding'))
                dispatch(filterEmojis(people))
        } 

        const filterByNature = () => {
                dispatch(filterEmojisRequest())
                let plants = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('plant'))
                dispatch(filterEmojis(plants))
        }  

        const filterBySmileys = () => {
                dispatch(filterEmojisRequest())
                let smileys = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('face'))
                dispatch(filterEmojis(smileys))
        } 

        const filterBySymbols = () => {
                dispatch(filterEmojisRequest())
                let symbols = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('symbol'))
                dispatch(filterEmojis(symbols))
        } 

        const filterByTransport = () => {
                dispatch(filterEmojisRequest())
                let transport = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('transport'))
                dispatch(filterEmojis(transport))
        } 

        const filterByTravelAndPlaces= () => {
                dispatch(filterEmojisRequest())
                let travelAndPlaces = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('place'))
                dispatch(filterEmojis(travelAndPlaces))
        } 

        const filterByFamily = () => {
                dispatch(filterEmojisRequest())
                let family = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('family'))
                dispatch(filterEmojis(family))
        } 

        const filterByWeather = () => {
                dispatch(filterEmojisRequest())
                let weather = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('sky-weather'))
                dispatch(filterEmojis(weather))
        } 

        const filterByZodiacSign= () => {
                dispatch(filterEmojisRequest())
                let zodiacs = state.emojis.filter(emoji => emoji.attributes.subGroup.includes('zodiac'))
                dispatch(filterEmojis(zodiacs))
        } 

        const filterByOther = () => {
                dispatch(filterEmojisRequest())
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
                        (!emoji.attributes.subGroup.includes('sky-weather'))
                )
                dispatch(filterEmojis(other))
        } 

        return (
                <div className="side_nav_container">
                        <ul>
                                <li className="logo_item">
                                        <Logo />
                                </li>
                                <li className="smileys cat" onClick={filterBySmileys}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="smileys">
                                                        😇
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Smileys
                                        </div>
                                </li>
                                {/* <li className="all_emojis cat" onClick={getAllEmojis}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="infinite">
                                                        ♾️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                All Emojis
                                        </div>
                                </li> */}
                                <li className="animals cat" onClick={filterByAnimal}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="animals">
                                                        🦁
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Animals
                                        </div>
                                </li>
                                <li className="body_parts cat" onClick={filterByBodyParts}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="body parts">
                                                        🖕🏽
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Body Parts
                                        </div>
                                </li>
                                <li className="clothing_and_acc cat" onClick={filterByClothingAndAcc}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="clothing and acc">
                                                        👗
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Clothing & Acc
                                        </div>
                                </li>
                                <li className="emoticons cat" onClick={filterByEmotion}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="emoticons">
                                                        ❤️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Emoticons
                                        </div>
                                </li>
                                <li className="family cat" onClick={filterByFamily}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="family">
                                                        👫🏼
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Family
                                        </div>
                                </li>
                                <li className="flags cat" onClick={filterByFlags}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="flags">
                                                        🇺🇸
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Flags
                                        </div>
                                </li>
                                <li className="food_and_drink cat" onClick={filterByFoodAndDrink}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="food and drink">
                                                        🍔
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Food & Drink
                                        </div>
                                </li>
                                <li className="gestures cat" onClick={filterByGestures}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="gestures">
                                                        🤷🏾‍♂️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Gestures
                                        </div>
                                </li>
                                <li className="music cat">
                                        <div className="emojicon">
                                                <span role="img" aria-label="music">
                                                        🎸
                                                </span>
                                        </div>
                                        <div className="cat_name" onClick={filterByMusic}>
                                                Music
                                        </div>
                                </li>
                                <li className="people_and_roles cat" onClick={filterByPeople}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="people and roles">
                                                        🧑🏽‍🍳
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                People
                                        </div>
                                </li>
                                <li className="plants cat" onClick={filterByNature}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="plants">
                                                        🌵
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Nature
                                        </div>
                                </li>
                                <li className="symbols cat" onClick={filterBySymbols}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="symbols">
                                                        🏧
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Symbols
                                        </div>
                                </li>
                                <li className="transport cat" onClick={filterByTransport}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="transport">
                                                        🏍️
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Transport
                                        </div>
                                </li>
                                <li className="travel_and_places cat" onClick={filterByTravelAndPlaces}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="travel and places">
                                                        🌎
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Travel & Places
                                        </div>
                                </li>
                                <li className="weather cat" onClick={filterByWeather}>
                                        <div className="emojicon">
                                                <span role="img" aria-label="weather">
                                                        🌈
                                                </span>
                                        </div>
                                        <div className="cat_name">
                                                Weather
                                        </div>
                                </li>
                                <li className="zodiacs cat" onClick={filterByZodiacSign}>
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
