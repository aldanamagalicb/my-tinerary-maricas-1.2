import React from 'react'

export default function IconUser(props) {
    let {onClick} = props
    return (
        <div className='w-100 flex center' onClick={onClick}>
            <img src="./img/home.png" alt="" width='40px' />
        </div>
    )
}
