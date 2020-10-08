import {_get} from '../../Utils/config'
import axios from 'axios'
import { filterEmojis, loadEmojis, requestingEmojis } from '../emojis'

const { baseUrl, emojis } = _get.endpoints

export const loadEmojisThunk = () => {
        return async dispatch => {
                try {
                        dispatch(requestingEmojis())
                        const response = await axios(`${baseUrl}/${emojis}`)
                        const fetchedEmojis = response.data.emojis.data
                        dispatch(loadEmojis(fetchedEmojis))
                        dispatch(filterEmojis(fetchedEmojis))
                } catch(e) {
                        console.log(e)
                }
        }
}