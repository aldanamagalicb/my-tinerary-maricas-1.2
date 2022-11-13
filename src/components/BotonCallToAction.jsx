import React from 'react'

export default function BotonCallToAction(props) {
    let { className, text } = props
    return (
        <button className={className}>{text}</button>
    )
}
