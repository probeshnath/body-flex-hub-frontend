import React, { useEffect, useState } from 'react'
import TrainerProfile from '../../components/TrainerPage/TrainerProfile'
import usePublicAxios from '../../hooks/usePublicAxios'

const TrainerPage = () => {
  const [trainers, setTrainers] = useState(null)
  const publicAxios = usePublicAxios()

  useEffect(() =>{
    publicAxios.get("/trainers")
    .then(res =>{
      setTrainers(res.data)
    })
    .catch(error =>{
      console.log(error)
    })
  },[])
  
  return ( 
    <div className='bg-gray-200 pt-5 pb-10'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center py-5 text-4xl font-bold text-orange-600'>All Trainers</h2>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3">
              {
                trainers?.map(trainer =>(

                  <TrainerProfile key={trainer._id} trainer={trainer} />
                ))
              }
               
            </div>
        </div>
    </div>
  )
}

export default TrainerPage