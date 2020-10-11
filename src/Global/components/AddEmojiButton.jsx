import React from 'react'
import { useDispatch } from 'react-redux'
import { saveEmojiThunk } from '../../Store/middleware/authThunk'


const AddEmojiButton = () => {
        const dispatch = useDispatch()
        const handleEmojisSaveButtonClick = event => {
                let targetIsPlusIcon = event.target.classList.contains('fa-plus')
                let emoji_id;
                if (targetIsPlusIcon) {
                        emoji_id = event.target.parentElement.parentElement.dataset.emojiId
                        dispatch(saveEmojiThunk(emoji_id))
                        alert("Emoji saved to favorites")
                }
        }

        return (
                <div className="save_emoji" onClick={handleEmojisSaveButtonClick}>
                        <i className="fas fa-plus"></i>
                </div>
        )
}

export default AddEmojiButton
