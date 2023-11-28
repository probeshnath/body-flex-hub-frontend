import React from 'react'

const TrainerSlot = ({solt}) => {
  // console.log(solt)

  return (
    <div className='bg-white px-3 py-5'>
        <h2>Title: {solt?.slot_name}</h2>
        <p>Time: {solt?.cls_time}</p>
        <p>Price: {solt?.price}</p>

        <button className='btn'>Book</button>
    </div>
  )
}

export default TrainerSlot