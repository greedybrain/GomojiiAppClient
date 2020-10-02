import React from 'react'
import Logout from '../../../Global/components/Logout'
import EmojisChildContainer from '../components/EmojisChildContainer'

const HomeContainer = () => {
        return (
                <div className="home_page_container">
                        <Logout />
                        <EmojisChildContainer />
                </div>
        )
}

export default HomeContainer
