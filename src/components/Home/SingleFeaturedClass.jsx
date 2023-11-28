import React from 'react'
import { Link } from 'react-router-dom'

const SingleFeaturedClass = ({item}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <div className='bg-white shadow-lg p-3 rounded-md'>
                <img src={item.bodyImg} alt={item.title} className='h-32 w-full object-center rounded-md' />
                <h3 className='text-xl font-bold capitalize pt-2 pl-2'>{item.title}</h3>
                <Link to={`/classes/${item._id}`}> <button className='bg-orange-500 p-1 text-sm px-2 w-full font-bold text-white rounded-md hover:bg-black'>Show Detail</button></Link>
              </div>
            </div>
        </div>
    )
}

export default SingleFeaturedClass