import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-gray-500'>
            <div className="navbar max-w-7xl py-3 mx-auto ">
                <div className="flex-1">
                    <Link className='flex items-center gap-1' to="/">
                        <img className='w-[50px] ' src="https://i.ibb.co/By7Q8hx/Gym-Logo-Graphics-1-28-removebg-preview-1.png" alt="" />
                        <h2 className='text-2xl font-semibold'><span className='text-orange-300'>BodyFlex</span> Hub</h2>
                    </Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-100 rounded-box w-52">

                            <li><NavLink to="/"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Home </NavLink></li>
                            <li><NavLink to="/gallery"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Gallery </NavLink></li>
                            <li><NavLink to="/trainer"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Trainer </NavLink></li>
                            <li><NavLink to="/classes"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Classes </NavLink></li>
                            <li><NavLink to="/dashboard"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Dashboard </NavLink></li>
                            <li><NavLink to="/forums"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Forums </NavLink></li>
                            <li><NavLink to="/signIn"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Sign In </NavLink></li>
                            <li><NavLink to="/signUp"  className={({ isActive }) =>  isActive ? "active" : "hover:bg-gray-400" }> Sign Up </NavLink></li>
                            <li><button> Logout </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar