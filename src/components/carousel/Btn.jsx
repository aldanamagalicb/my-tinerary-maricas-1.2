import React from 'react'

export default function Btn(props) {
    let {verb} = props
    let {onClick} = props 
    return (
    <div className= "buttonCar" onClick={onClick}>{verb}</div>
    )
}