import React from 'react'

export default function Checkbox(props) {

    let {continent, key, value, fx, refId} = props

    return (
        <label>
            <input type="checkbox" className='mx-1' ref={refId} onClick={fx} id={key} value={value}/>{continent}
        </label>
    )
}
