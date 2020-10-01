//! REACT  && REDUXSTUFF
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
//! MY COMPONENTS
import HomeContainer from '../Pages/HomePage/containers/HomeContainer'
import LoginComponent from '../Pages/LoginPage/components/LoginComponent'
import SignupComponent from '../Pages/SignupPage/components/SignupComponent'

const Routes = () => {
        const user = useSelector(state => ({
                loggedIn: state.authRed.loggedIn
        }))
        
        return (
                <>
                        <Switch>
                                {/* Logic block  */}
                                {  
                                        // Allowed routes if logged in 
                                        user.loggedIn  
                                        ?
                                        (       <>
                                                        <Route 
                                                                exact 
                                                                path="/"
                                                                render={ routerProps => <HomeContainer { ...routerProps } /> }
                                                        />
                                                </>
                                        )
                                        :
                                        // Routes allowed if NOT logged in
                                        (
                                                <>
                                                        <Route 
                                                                exact
                                                                path="/login"
                                                                render={ routerProps => <LoginComponent { ...  routerProps } /> }
                                                        />
                                                        <Route 
                                                                exact
                                                                path="/signup"
                                                                render={ routerProps => <SignupComponent { ...  routerProps } /> }
                                                        />
                                                </>
                                        )
                                }
                        </Switch>
                </>
        )
}

export default Routes
