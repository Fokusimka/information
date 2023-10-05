import React from 'react'

import './text.css'

type textProps = {
    text: string
    type?: string
}

const Text = ({text, type}: textProps) => {
    return (
        <div className={`${type === 'outline' && 'outline'} textContainer`}>{text}</div>
    )
}

export default Text