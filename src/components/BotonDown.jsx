import React from 'react'

export default function BotonDown(props) {
    
    let {text, onClick, className} = props
    return (
        <li onClick={onClick} className={className}>
        <a>
            {text}
        </a>
    </li>
    )
}
