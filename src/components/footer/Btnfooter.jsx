import React from 'react'
import { Link as NavLink } from "react-router-dom";

export default function Btnfooter(props) {
        let { text, className, rute } = props
    return (
        <NavLink to ={rute} className={className}>
            <li>{text}</li>
        </NavLink>            
    )
    }
