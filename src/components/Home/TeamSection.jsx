import React, { useEffect, useState } from 'react'
import SingleTeamTrainer from './SingleTeamTrainer'
import TitleSection from '../shared/TitleSection'
import usePublicAxios from '../../hooks/usePublicAxios'
import { Link } from 'react-router-dom'

const TeamSection = () => {
  const publicAxios = usePublicAxios()
  const [trainers, setTrainers] = useState(null)

  useEffect(()=>{
    publicAxios.get("/trainers")
    .then(res =>{
      setTrainers(res.data)
    })
    .catch(error =>{
      console.log(error)
    })
  })
  return (
    <div className="bg-black py-10" >
      <TitleSection title={"All Trainer"} description={"Our all Best traniers are ready to fit your Body"} />
      <div className='max-w-7xl mx-auto grid grid-cols-1 px-3 md:grid-cols-2 pt-8 lg:grid-cols-4 gap-4 '>
        {
          trainers?.slice(0,4)?.map(trainer =>(

            <SingleTeamTrainer key={trainer._id} trainer={trainer} />
          ))
        }
       
      </div>
      <div className='flex pt-5 justify-center'>
         <Link to="/trainers" > <button className='bg-orange-500 py-1 w-fit px-3 text-white font-semibold rounded-md hover:bg-black mx-auto' >See All Trainers</button></Link>
        </div>
    </div>
  )
}

export default TeamSection