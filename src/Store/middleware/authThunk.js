import axios from 'axios'
import { catchFailedErrors, checkUserLoggedInStatus, loginUser, logoutUser, signupUser } from '../auth'

export const checkLoggedInStatusThunk = () => {
        return  async dispatch => {
                try {
                        const response = await axios(
                                'http://localhost:3001/api/v1/login_check',
                                { withCredentials: true }
                        )
                        const { user, logged_in } = response.data
                        const isLoggedIn = logged_in ? logged_in  : false
                        const userData = isLoggedIn ? user.data : {}
                        dispatch(checkUserLoggedInStatus(userData, isLoggedIn))
                } catch(e) {
                        console.log(e)
                }
        }
}

export const signupUserThunk = (email, password, password_confirmation, history) => {
        return async dispatch => {
                try {
                        const response = await axios.post(
                                'http://localhost:3001/api/v1/signup',
                                { email, password, password_confirmation },
                                { withCredentials: true }
                        )
                        let { user, email_error, password_error, password_confirmation_error } = response.data
                
                        if (user.data) {
                                dispatch(signupUser(user.data))
                                history.replace('/')
                        }
                        if (email_error.length > 0) {
                                dispatch(catchFailedErrors(`Email ${email_error[0]}`))
                                history.replace('/signup')
                        } 
                        if (password_error.length > 0) {
                                dispatch(catchFailedErrors(`Password ${password_error[0]}`))
                                history.replace('/signup')
                        } 
                        if (password_confirmation_error) {
                                dispatch(catchFailedErrors(password_confirmation_error))
                                history.replace('/signup')
                        } 
                } catch(e) {
                        console.log(e)
                }
        }
}

export const loginUserThunk = (email, password, history) => {
        return  async (dispatch) => {
                try {
                        const response = await axios.post(
                                'http://localhost:3001/api/v1/login',
                                { email, password },
                                { withCredentials: true }
                        )
                        const {user, error} = response.data
                        if (error) {
                                dispatch(catchFailedErrors(error))
                                history.replace('/login')
                        }
                        if (user) {
                                dispatch(loginUser(user))
                                history.replace('/')
                        } 
                } catch(e) {
                        console.log(e)
                }
        }
}

export const logoutUserThunk = (history) => {
        return async dispatch => {
                try {
                        await axios.delete(
                                'http://localhost:3001/api/v1/logout',
                                { withCredentials: true }
                        )
                        dispatch(logoutUser())
                        history.push('/login')
                } catch(e) {
                        console.log(e)
                }
        }
}