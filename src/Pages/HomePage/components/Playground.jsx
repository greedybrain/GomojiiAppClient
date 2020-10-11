import React from 'react'
import Header from './Header'
import '../../../Assets/playground.css'
import EmojisListComponent from './EmojisListComponent'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { loadEmojisThunk } from '../../../Store/middleware/emojisThunk'
// import { loadEmojis } from '../../../Store/emojis'

const Playground = () => {
        const results = useSelector(state => state.emojisRed.results)  
        return (
                <div className="playground_container">
                        <div className="ad"></div>
                        <Header />
                        {/* <div className="results">
                                {
                                        results.length === 1 
                                        ?
                                        `${results.length} result`
                                        :
                                        `${results.length} results`
                                }
                                
                        </div> */}
                        <div className="emojis_and_ads">
                                {<EmojisListComponent />}
                                <div className="ads">

                                </div>
                        </div>
                </div>  
        )
}

export default Playground
