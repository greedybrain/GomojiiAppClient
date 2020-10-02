import { act } from "react-dom/test-utils"

//! REDUCER
const initialState = {
        user: {},
        loggedIn: false,
        error: ''
}

export default function authReducer(state = initialState, action) {
        switch(action.type) {
                case CHECK_USER_LOGGED_IN_STATUS:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: action.payload.loggedIn,
                        }
                case SIGNUP_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: true
                        }
                case LOGIN_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: true,
                        }
                case CATCH_FAILED_ERRORS:
                        return {
                                ...state,
                                error: action.payload.error,
                                loggedIn: false,
                        }
                case LOGOUT_USER:
                        return {
                                ...state,
                                user: {},
                                loggedIn: false,
                        }
                default:
                        return  state
        }
}       

//! TYPES 
const CHECK_USER_LOGGED_IN_STATUS = "CHECK_USER_LOGGED_IN_STATUS"
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"
const CATCH_FAILED_ERRORS = "CATCH_FAILED_ERRORS"

//! CREATORS
export const checkUserLoggedInStatus = (userData, loggedIn) => ({ // adding user data if logged in already
        type: CHECK_USER_LOGGED_IN_STATUS,
        payload: {
                userData,
                loggedIn
        }
})

export const signupUser = userData => ({
        type: SIGNUP_USER,
        payload: {
                userData
        }
})

export const loginUser = userData => ({ 
        type: LOGIN_USER,
        payload: {
                userData,
        }
})

export const catchFailedErrors = error => ({
        type: CATCH_FAILED_ERRORS,
        payload: {
                error
        }
})

export const logoutUser = () => ({
        type: LOGOUT_USER
})
