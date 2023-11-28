import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import { NavLink, Outlet } from 'react-router-dom'
import usePublicAxios from '../hooks/usePublicAxios'
import useAuth from '../hooks/useAuth'

const DashboardLayout = () => {
    const publicAxios = usePublicAxios()
    const [userRole, setUserRole] = useState(null)
    const { user } = useAuth()
    // console.log(user?.email)
    // console.log("user role", userRole)


    useEffect(() => {
        publicAxios.get(`/users/${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setUserRole(res?.data?.role)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-12 '>
                {/* sidebar */}
                <div className='col-span-2 bg-slate-400 h-screen'>
                    <ul className='menu font-bold'>

                        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Dashboard </NavLink></li>

                        {/* admin route */}
                        {userRole && userRole === "admin" &&
                            <>
                                <li><NavLink to="/dashboard/allSubscribers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> All Subscribers </NavLink></li>
                                <li><NavLink to="/dashboard/allTrainers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> All Trainers </NavLink></li>
                                <li><NavLink to="/dashboard/appliedTrainers" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Applied Trainers </NavLink></li>
                                <li><NavLink to="/dashboard/balance" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}>Balance </NavLink></li>
                            </>
                        }

                        {/* trainer route */}
                        {userRole && userRole === "trainer" &&
                            <>
                                <li><NavLink to="/dashboard/manageSlots" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Manage Slots </NavLink></li>
                                <li><NavLink to="/dashboard/manageMember" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Manage Member </NavLink></li>
                                <li><NavLink to="/dashboard/addNewForum" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Add New Forum </NavLink></li>
                                <li><NavLink to="/dashboard/addNewClass" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Add New Class </NavLink></li>
                            </> 
                        }

                        {userRole && userRole === "member"  &&
                            <>
                                <li><NavLink to="/dashboard/activityLog" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Activity Log</NavLink></li>
                                <li><NavLink to="/dashboard/profileSettings" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Profile Settings </NavLink></li>
                                <li><NavLink to="/dashboard/recommendedClasses" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Recommended Classes  </NavLink></li>
                            </>
                        }
                         { userRole && userRole === "applied"  &&
                            <>
                                <li><NavLink to="/dashboard/activityLog" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Activity Log</NavLink></li>
                                <li><NavLink to="/dashboard/profileSettings" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Profile Settings </NavLink></li>
                                <li><NavLink to="/dashboard/recommendedClasses" className={({ isActive }) => isActive ? "active" : "hover:bg-gray-400"}> Recommended Classes  </NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                {/* children */}
                <div className="col-span-10 p-5 bg-gray-300">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout