import React from 'react'
import Header from './Header'
import '../../../Assets/playground.css'
import EmojisListComponent from './EmojisListComponent'
import MenuDrawer from '../../../Global/components/MenuDrawer'

const Playground = () => {
        return (
                <div className="playground_container">
                        <div className="ad"></div>
                        <MenuDrawer />
                        <Header />
                        <div className="emojis_and_ads">
                                <EmojisListComponent />
                                <div className="ads">
                                        <ul className="footer_ads_section">
                                                <li className="ad_1">
                                                        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                                        <ins class="adsbygoogle"
                                                        style={{display: 'block'}}
                                                        data-ad-client="ca-pub-7186715356628967"
                                                        data-ad-slot="6294394158"
                                                        data-ad-format="auto"
                                                        data-full-width-responsive="true"></ins>
                                                        <script>
                                                                (adsbygoogle = window.adsbygoogle || []).push({});
                                                        </script>
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
