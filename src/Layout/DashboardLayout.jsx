import React from 'react'
import Navbar from '../components/shared/Navbar'
import { NavLink, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='grid grid-cols-12 gap-4'>
            {/* sidebar */}
            <div className='col-span-2 bg-slate-400 h-screen'>
                <ul className='menu font-bold'>
                    <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Dashboard </NavLink></li>
                    <li><NavLink to="/allSubscribers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> All Subscribers </NavLink></li>
                    <li><NavLink to="/allTrainers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> All Trainers </NavLink></li>
                    <li><NavLink to="/appliedTrainers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Applied Trainers </NavLink></li>

                    <li><NavLink to="/manageSlots" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Manage Slots </NavLink></li>
                    <li><NavLink to="/manageMember" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Manage Member </NavLink></li>
                    <li><NavLink to="/addNewForum" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Add New Forum </NavLink></li>
                    <li><NavLink to="/addNewClass" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Add New Class </NavLink></li>


                    <li><NavLink to="/ActivityLog" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Activity Log</NavLink></li>
                    <li><NavLink to="/profileSettings" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Profile Settings </NavLink></li>
                    <li><NavLink to="/recommendedClassesPage" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Recommended Classes Page </NavLink></li>


                </ul>
            </div>
            {/* children */}
            <div className="col-span-10">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout