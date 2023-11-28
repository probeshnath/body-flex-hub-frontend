import React from 'react'
import { Link } from 'react-router-dom'

const SingleTeamTrainer = ({trainer}) => {
  // console.log(trainer)
  return (
    <div className='bg-slate-100 cursor-pointer group transition ease-in rounded-md overflow-hidden text-center p-2'>
        <img className='h-[200px] object-cover group-hover:scale-110  w-full' src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
        <div>
          
        </div>
        <h2 className='text-xl pt-4 capitalize font-bold text-orange-500'>{trainer.name}</h2>
        <p className='font-bold  text-gray-500 capitalize'>{trainer.age} years experience</p>
        <Link className='pb-4' to={`/trainers/${trainer._id}`}><button className='bg-orange-500 py-1 w-full text-white rounded-md'>View Profile</button></Link>
    </div>
  )
}

export default SingleTeamTrainer