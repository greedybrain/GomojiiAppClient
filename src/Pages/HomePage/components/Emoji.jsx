import React from 'react'

const Emoji = ({ emoji }) => {
        return (
                <span style={{ display: "inline-block" }}>
                        { emoji.attributes ? emoji.attributes.character : emoji.character }
                </span>
        )
}

export default Emoji
