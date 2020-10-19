//! REACT  && REDUXSTUFF
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
//! MY COMPONENTS
import HomeContainer from '../Pages/HomePage/containers/HomeContainer'
import LoginComponent from '../Pages/LoginPage/components/LoginComponent'
import SignupComponent from '../Pages/SignupPage/components/SignupComponent'
import NotFoundContainer from '../Global/containers/NotFoundContainer'

const Routes = ({ randomEmoji }) => {     
        const user = useSelector(state => ({
                loggedIn: state.authRed.loggedIn
        }))   

        return (
                <>
                        <Switch>
                                <Route 
                                        exact
                                        path="/login"
                                        render={ routerProps => user.loggedIn ? <Redirect to="/" /> : <LoginComponent { ...  routerProps } randomEmoji={randomEmoji} /> }
                                />
                                <Route 
                                        exact
                                        path="/signup"
                                        render={ routerProps => user.loggedIn ? <Redirect to="/" /> : <SignupComponent { ...  routerProps } randomEmoji={randomEmoji} /> }
                                />
                                <Route 
                                        path="/not_found"
                                        component={NotFoundContainer}
                                />
                                <Route 
                                        exact 
                                        path="/"
                                        render={ routerProps => <HomeContainer { ...routerProps } /> }
                                />
                                <Redirect to='/not_found' />
                        </Switch>
                </>
        )
}

export default Routes
