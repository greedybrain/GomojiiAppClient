import React from 'react'
import Header from './Header'
import '../../../Assets/playground.css'
import EmojisListComponent from './EmojisListComponent'

const Playground = () => {
        return (
                <div className="playground_container">
                        <div className="ad"></div>
                        <Header />
                        <div className="emojis_and_ads">
                                {<EmojisListComponent />}
                                <div className="ads">
                                        <div className="footer_ads_section">
                                                <span aria-label="copyright emoji" role="img">©️</span> 2020 Gomojii
                                        </div>
                                </div>
                        </div>
                </div>  
        )
}

export default Playground
