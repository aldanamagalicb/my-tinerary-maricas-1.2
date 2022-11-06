import React from 'react'
import { Link as NavLink } from 'react-router-dom';


export default function BotonDown(props) {
    
    let {text, onClick, className, rute} = props
    return (
        <NavLink to={rute}>
            <li onClick={onClick} className={className}>
                <a>
                    {text}
                </a>
            </li>
        </NavLink>

    )
}
