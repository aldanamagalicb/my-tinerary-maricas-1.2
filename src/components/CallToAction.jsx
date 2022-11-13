import React from 'react';
import { Link as NavLink } from 'react-router-dom';

export default function CallToAction(props) {
    let { rute, className, text } = props

    return (
        <NavLink to={rute}>
            <button className={className}>{text}</button>
        </NavLink>
    )
}

