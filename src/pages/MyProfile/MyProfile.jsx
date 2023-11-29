import { useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";

import 'react-tabs/style/react-tabs.css';
import TrainerSlot from "../../components/TrainerDetails/TrainerSlot";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  
  const { user } = useAuth()
  return (
    <div className="bg-slate-300">
      <Helmet>
        <title>{`BodyFlex Hub || ${user?.displayName}`}</title>
      </Helmet>
      <div className="max-w-7xl  mx-auto">
        {/* header */}
        <div className="bg-white">
          <img className="w-full h-52 object-top" src="https://i.ibb.co/CM9hFf5/img-4.webp" alt="" />
          <div className="flex gap-5 -mt-20 ml-10">
            <img className="w-28 border-4 border-white h-28 rounded-full" src={user?.photoURL} alt="" />
          </div>
          <div className=" px-10 pt-3">
            <div className="flex items-center gap-1">
              <h3 className="text-3xl">{user?.displayName}</h3>
              <BiSolidBadgeCheck className="mt-3 text-lg text-green-500 " />
            </div>
            <p className="font-bold text-gray-600  pb-2">{user?.email}</p>
            <p className="text-sm text-gray-600 pb-2">Elevate your fitness journey with our signature class, where every session is a fusion of high-intensity workouts and targeted exercises. Unleash your potential, sculpt lean muscles, and boost endurance. Join a community that motivates and celebrates progress. Your path to a stronger, fitter you starts here</p>
            {/* badge */}
          </div>
        </div>
        {/* body */}
       
        {/* be a trainer page */}
        <div className="flex justify-center">
          <Link to="/"> <button className="bg-orange-500 py-1 my-5 px-5 text-white font-bold mb-4 rounded-md">Go to Home Page</button></Link>
        </div>
      </div>
    </div>

  )
}

export default MyProfile