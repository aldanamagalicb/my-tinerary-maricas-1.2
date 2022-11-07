import React from 'react'

export default function Checkbox(props) {
    let { continent, refId, valor, fx } = props
    return (
        <label >
            <input type="checkbox" value={valor} name={continent} ref={refId} onClick={fx} /> {continent} 
        </label>
    )
}
