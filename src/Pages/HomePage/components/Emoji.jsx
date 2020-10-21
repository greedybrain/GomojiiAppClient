import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Emoji = ({ emoji }) => {
        const handleCopyEmoji = ()  => alert('Emoji saved and copied')
        return (
                <CopyToClipboard text={ emoji.attributes ? emoji.attributes.character : emoji.character }>
                        <span onClick={handleCopyEmoji} data-id={emoji.id} style={{ display: "inline-block" }}>
                                { emoji.attributes ? emoji.attributes.character : emoji.character }
                        </span>
                </CopyToClipboard>
        )
}

export default Emoji