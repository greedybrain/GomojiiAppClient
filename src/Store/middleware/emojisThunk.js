//!BUILT IN
//!CUSTOM
import {_get} from '../../Utils/config'
import axios from 'axios'
import { loadEmojis, requestingEmojis } from '../emojis'

const { baseUrl, emojis } = _get.endpoints

export const loadEmojisThunk = () => {
        return async (dispatch, getState) => {
                try {
                        dispatch(requestingEmojis())
                        const response = await axios(`${baseUrl}/${emojis}`)
                        const fetchedEmojis = response.data.emojis.data
                        dispatch(loadEmojis(fetchedEmojis))
                } catch(e) {
                        console.log(e)
                }
        }
}