import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink, Outlet } from 'react-router-dom'

const MainDashboard = () => {
    return (
        <div>
            <Helmet>
                <title>BodyFlex Hub || Dashboard</title>
            </Helmet>
            <h2>HI my profile</h2>
        </div>
    )
}

export default MainDashboard