import React from 'react'

const Emoji = ({ emoji }) => {
        return (
                <>
                        { emoji.attributes ? emoji.attributes.character : emoji.character }
                </>
        )
}

export default Emoji
