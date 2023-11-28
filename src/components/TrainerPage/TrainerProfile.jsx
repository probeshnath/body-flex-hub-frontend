import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const TrainerProfile = ({trainer}) => {
    console.log(trainer)
  return (
    <div className='bg-slate-50 rounded-lg shadow-md'>
         {/* components */}
         <div className="p-2 overflow-hidden transition-transform">
                    <img className='w-full object-center rounded-t-lg h-52' src={trainer?.img || "https://i.ibb.co/686tyHs/probesh-deb-nath.jpg"} alt="" />
                    <div className='py-3'>
                        <h3 className='text-2xl font-bold'>{trainer?.name}</h3>
                        <p className='text-sm text-gray-400 '>{trainer?.age} years Experience</p>

                        {/* abilable slot */}
                                <p>Avaliable :</p> 
                            <div className='flex justify-between '>
                                <p className='bg-green-400 p-1 text-sm font-bold rounded-full '>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                            </div>
                        <div className='flex justify-around py-3 text-xl'>
                            {/* social media icons */}
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                            <FaGoogle />
                            <FaGithub />
                        </div>
                       <Link to={`/trainers/${trainer._id}`}> <button className='text-center hover:bg-black mt-2 w-full bg-orange-500 py-1 rounded-lg font-bold text-white'>Know More</button></Link>
                    </div>
                </div>
    </div>
  )
}

export default TrainerProfile