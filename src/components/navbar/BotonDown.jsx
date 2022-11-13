import React from 'react'
import { Link as NavLink } from 'react-router-dom';


export default function BotonDown(props) {
    
    let {text, onClick, className, rute} = props
    return (
        <NavLink to={rute}>
            <p onClick={onClick} className={className}>{text}</p>
        </NavLink>

    )
}
