import React from 'react'
import { ReactComponent as Plus } from '../../assets/plus.svg';

import './button.css'

type buttonProps = {
    text?: string
    type?: string
    onClick?: () => void
}

const Button = ({ text, type, onClick }: buttonProps) => {

    const getClass = () => {
        switch(type) {
            case 'primary':
                return 'primary'
            case 'add': 
                return 'add'
            case 'outline':
                return 'outline'
            default: 
                return ''
        }
    }

    return (
        <div className={`button ${getClass()}`} onClick={onClick}>
           {type === 'add' && <Plus/>}
           {text || 'Button'}
        </div>
    )
}

export default Button