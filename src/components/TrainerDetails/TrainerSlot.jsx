import React from 'react'
import { Link } from 'react-router-dom'

const TrainerSlot = ({solt}) => {
  // console.log(solt)

  return (
    <div className='bg-white px-3 py-5'>
        <h2>Title: {solt?.slot_name}</h2>
        <p>Time: {solt?.cls_time}</p>
        <p>Price: {solt?.price}</p>

       <Link to={"/trainerBooked"} > <button className='bg-orange-500 text-white py-1 px-4 rounded-md'>Book</button></Link>
    </div>
  )
}

export default TrainerSlot