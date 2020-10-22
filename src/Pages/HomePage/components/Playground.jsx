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
                                        <ul className="footer_ads_section">
                                                <li className="ad_1">
                                                        <img src="/sample-ad-1.jpg" alt="ad 1"/>
                                                </li>
                                                <li className="ad_2">
                                                        <img src="/sample-ad-2.png" alt="ad 2"/>
                                                </li>
                                                <li className="copyright_footer">
                                                        <span aria-label="copyright emoji" role="img">©️</span> 2020 Gomojii
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>  
        )
}

export default Playground
