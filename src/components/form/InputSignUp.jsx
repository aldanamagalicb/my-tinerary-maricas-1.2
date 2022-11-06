import React from 'react'

export default function InputSignUp(props) {
    let {className, type, placeholder, value, id, fx} = props
    return (
        <input className={className} type={type} placeholder={placeholder} onClick={fx} value={value} ref={id}/>
    )
}
