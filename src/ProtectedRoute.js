import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const auth = localStorage.getItem("loggedIn")
    return (
        <div>
            {auth ? <Outlet /> : <Navigate to={'/login'} />}
        </div>
    )
}

export default ProtectedRoute
