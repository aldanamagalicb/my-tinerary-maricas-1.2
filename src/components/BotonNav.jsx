import React from 'react'

export default function BotonNav(props) {
    let {text } = props
    return (
        <li>
            <a>
                {text}
            </a>
        </li>
    )
}
