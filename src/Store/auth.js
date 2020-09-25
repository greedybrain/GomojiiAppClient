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
                                lastStatusCheck: action.payload.lastStatusCheck
                        }
                
                case LOGIN_USER:
                        return {
                                ...state,
                                user: action.payload.userData,
                                loggedIn: true,
                                lastStatusCheck: action.payload.lastStatusCheck
                        }
                case CATCH_FAILED_LOGIN_ERRORS:
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
const LOGIN_USER = "LOGIN_USER"
const CATCH_FAILED_LOGIN_ERRORS = "CATCH_FAILED_LOGIN_ERRORS"
const LOGOUT_USER = "LOGOUT_USER"

//! CREATORS
export const checkUserLoggedInStatus = (userData, loggedIn) => ({ // adding user data if logged in already
        type: CHECK_USER_LOGGED_IN_STATUS,
        payload: {
                userData,
                loggedIn
        }
})

export const loginUser = userData => ({ 
        type: LOGIN_USER,
        payload: {
                userData,
        }
})

export const catchFailedLoginErrors = error => ({
        type: CATCH_FAILED_LOGIN_ERRORS,
        payload: {
                error
        }
})

export const logoutUser = () => ({
        type: LOGOUT_USER
})
