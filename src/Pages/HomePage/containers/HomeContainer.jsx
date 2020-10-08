import React from 'react'
import Playground from '../components/Playground'
import SideNavContainer from '../components/SideNavContainer'
import '../../../Assets/homeContainer.css'

const HomeContainer = () => {
        return (
                <div className="home_page_container">
                        <SideNavContainer />
                        <Playground />
                </div>
        )
}

export default HomeContainer
