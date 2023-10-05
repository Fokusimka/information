import React from 'react'

import './input.css';

type inputProps = {
    placeholder?: string
    initialValue?: string
    onChangeInput?: (value: string) => void
}

const Input = ({ placeholder, initialValue, onChangeInput }: inputProps) => {
    const [value, setValue] = React.useState(initialValue || '')

    const change = (newVal: string) => {
        setValue(newVal)
        onChangeInput?.(newVal)
    }

    return (
        <div className="input">
            <input type="text" className="inputLegacy" required onChange={(e) => change(e.target.value)} value={value} />
            <label className="inputPlaceholder">{placeholder || 'Placeholder'}</label>
        </div> 
    )
}

export default Input