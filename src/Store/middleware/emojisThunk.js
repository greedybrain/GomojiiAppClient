//!BUILT IN
//!CUSTOM
import {_get} from '../../Utils/config'
import axios from 'axios'
import { loadEmojis, requestingEmojis } from '../emojis'

const { baseUrl, emojis } = _get.endpoints

export const loadEmojisThunk = () => {
        return async (dispatch, getState) => {
                let cachedEmojis = JSON.parse(localStorage.getItem('emojis'))
                if (cachedEmojis) {
                        dispatch(requestingEmojis())
                        dispatch(loadEmojis(cachedEmojis))
                        return;
                } else {
                        try {
                                dispatch(requestingEmojis())
                                const response = await axios(`${baseUrl}/${emojis}`)
                                const fetchedEmojis = response.data.emojis.data
                                dispatch(loadEmojis(fetchedEmojis))
                                localStorage.setItem('emojis', JSON.stringify(fetchedEmojis))
                        } catch(e) {
                                console.log(e)
                        }
                }
        }
}