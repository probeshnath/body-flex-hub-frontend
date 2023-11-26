import React from 'react'
import TrainerProfile from '../../components/TrainerPage/TrainerProfile'

const TrainerPage = () => {
  return (
    <div className='bg-gray-200 pt-5 pb-10'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center py-5 text-4xl font-bold text-orange-600'>All Trainers</h2>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3">
               <TrainerProfile />
               <TrainerProfile />
               <TrainerProfile />
               <TrainerProfile />
               <TrainerProfile />
               <TrainerProfile />
            </div>
        </div>
    </div>
  )
}

export default TrainerPage