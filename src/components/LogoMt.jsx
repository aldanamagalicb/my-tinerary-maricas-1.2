import React from 'react'

export default function LogoMt(props) {
    let {link, className} = props
    return (
        <div className={className}>
            <img src={link} alt="" />
        </div>
    )
}
