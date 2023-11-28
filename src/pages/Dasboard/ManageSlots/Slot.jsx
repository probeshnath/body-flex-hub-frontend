import React from 'react'

const Slot = ({solt}) => {
    return (
        <div>
            <div className='bg-white px-3 py-5'>
                <h2 className='text-2xl font-bold'>Title: {solt?.slot_name}</h2>
                <p>Time: {solt?.cls_time}</p>
                <p>Price: {solt?.price}</p>
                <p>Purchaed By:  {solt?.buyer_name || "Available"}</p>

               
            </div>
        </div>
    )
}

export default Slot