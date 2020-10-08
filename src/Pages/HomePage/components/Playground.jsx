import React from 'react'
import Header from './Header'
import '../../../Assets/playground.css'
import EmojisListComponent from './EmojisListComponent'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadEmojisThunk } from '../../../Store/middleware/emojisThunk'
import { loadEmojis } from '../../../Store/emojis'

const Playground = () => {
        

        return (
                <div className="playground_container">
                        <Header />
                        <div className="emojis_and_ads">
                                {<EmojisListComponent />}
                                <div className="ads">

                                </div>
                        </div>
                </div>  
        )
}

export default Playground
