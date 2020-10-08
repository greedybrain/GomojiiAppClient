import axios from 'axios'
import { _get } from '../../Utils/config'
import { catchFailedErrors, checkUserLoggedInStatus, loginUser, logoutUser, signupUser } from '../auth'


const { baseUrl, loginCheck, signup, login, logout } = _get.endpoints

export const checkLoggedInStatusThunk = () => {
        return  async dispatch => {
                try {
                        const response = await axios(
                                `${baseUrl}/${loginCheck}`,
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
                                `${baseUrl}/${signup}`,
                                { email, password, password_confirmation },
                                { withCredentials: true }
                        )
                        let { user, email_error, password_error, password_confirmation_error } = response.data
                        if(email === '' && password === '' && password_confirmation === '') {
                                dispatch(catchFailedErrors("All fields are required"))
                                return;
                        }
                        if (user) {
                                dispatch(signupUser(user.data))
                                history.replace('/')
                        }
                        if (email_error && email_error.length > 0) {
                                dispatch(catchFailedErrors(`Email ${email_error[0]}`))
                                history.replace('/signup')
                                return
                        } 
                        if (password_error && password_error.length > 0) {
                                dispatch(catchFailedErrors(`Password ${password_error[0]}`))
                                history.replace('/signup')
                                return
                        } 
                        if (password_confirmation_error) {
                                dispatch(catchFailedErrors(password_confirmation_error))
                                history.replace('/signup')
                                return
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
                                `${baseUrl}/${login}`,
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

export const logoutUserThunk = history => {
        return async dispatch => {
                try {
                        await axios.delete(
                                `${baseUrl}/${logout}`,
                                { withCredentials: true }
                        )
                        dispatch(logoutUser())
                        history.push('/login')
                } catch(e) {
                        console.log(e)
                }
        }
}