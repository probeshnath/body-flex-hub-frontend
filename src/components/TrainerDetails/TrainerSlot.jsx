import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import usePublicAxios from '../../hooks/usePublicAxios'

const TrainerSlot = ({solt,trainer}) => {
  // console.log(solt)
  const publicAxios = usePublicAxios()
  const {user} = useAuth()
  const navigate = useNavigate()

  const handleBookTrainer = (e) =>{
    e.preventDefault()

    const bookedSlotInfo = {
      buyer_email : user?.email,
      buyer_name : user?.displayName,
      cls: solt,
      status: "",
      trainer: trainer

    }
    // console.log(bookedSlotInfo)

    // save database
    publicAxios.post("/cartClass",bookedSlotInfo)
    .then(res =>{
      // console.log(res.data)
      if(res.data.insertedId){
        navigate(`/trainerBooked/${res?.data?.insertedId}`)
      }
    })
    .catch(error =>{
      console.log(error)
    })


  }

  return (
    <div className='bg-white px-3 py-5'>
        <h2 className='text-lg font-semibold text-orange-500'>Title: {solt?.slot_name}</h2>
        <p>Time: {solt?.cls_time}</p>
        <p>Price: {solt?.price}</p>

       {/* <Link to={"/trainerBooked"} > */}
         <button onClick={handleBookTrainer} className='bg-orange-500 text-white py-1 px-4 rounded-md'>Book</button>
         {/* </Link> */}
    </div>
  )
}

export default TrainerSlot