import React from 'react'
import { Navigate } from "react-router-dom"
import { Outlet } from 'react-router-dom'
const ProtectedRoute = ({isAllowed, children, reDirect}) => {
    if(!isAllowed){
        return <Navigate to={reDirect}/>
    }
    return children ? children : <Outlet/>
}

export default ProtectedRoute