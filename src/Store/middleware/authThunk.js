import axios from 'axios'
import { catchFailedLoginErrors, checkUserLoggedInStatus, loginUser } from '../auth'

export const checkLoggedInStatusThunk = () => {
        return  async (dispatch, getState) => {
                try {
                        const response = await axios(
                                'http://localhost:3001/api/v1/login_check',
                                { withCredentials: true }
                        )
                        const isLoggedIn = response.data.logged_in ? response.data.logged_in  : false
                        const user = isLoggedIn ? response.data.user.data : {}
                        dispatch(checkUserLoggedInStatus(user, isLoggedIn))
                } catch(e) {
                        console.log(e)
                }
        }
}

export const loginUserThunk = (email, password, history) => {
        return  async (dispatch, getState) => {
                try {
                        const response = await axios.post(
                                'http://localhost:3001/api/v1/login',
                                { email, password },
                                { withCredentials: true }
                        )
                        const error = response.data.error ? response.data.error  : null
                        const user = response.data.user.data ? response.data.user.data : null
                        error ? dispatch(catchFailedLoginErrors(error)) : dispatch(loginUser(user))
                        // history.replace('/')
                } catch(e) {
                        console.log(e)
                }
        }
}