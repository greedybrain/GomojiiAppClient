import React from 'react'

const EmojiChildComponent = ({ emoji }) => {
        return (
                <>
                        { emoji.attributes.character }
                </>
        )
}

export default EmojiChildComponent
