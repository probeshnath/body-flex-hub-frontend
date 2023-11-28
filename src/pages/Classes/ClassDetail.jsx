import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import usePublicAxios from '../../hooks/usePublicAxios';
import { useParams } from 'react-router-dom';

const ClassDetail = () => {
    const [cls, setCls] = useState(null)
    const publicAxios = usePublicAxios()
    const { id } = useParams()

    useEffect(() => {
        publicAxios.get(`/classes/${id}`)
            .then(res => {
                console.log(res.data)
                setCls(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className='max-w-7xl py-10 mx-auto'>
            <h2 className='text-4xl text-center font-bold text-orange-600 capitalize '>{cls?.data?.title}</h2>
            <p className='text-center text-sm mb-5'>{cls?.data?.date}</p>
            <img className='w-full h-72 object-cover rounded-md' src={cls?.data?.bodyImg} alt={cls?.data?.title} />
           <h5 className=' pt-3 font-bold text-xl'>Overview the class</h5>
            <p className='text-gray-500 pl-3 mb-5'>{cls?.data?.description}</p>

            {/* trainer */}
            <h3 className='text-3xl font-bold'>Trainer Info</h3>
            <div className='flex gap-2 items-center'>
                <img className='w-10 h-10 rounded-full' src={cls?.trainerInfo?.img} alt={cls?.trainerInfo?.name} />
                <div>
                    <h3 className='text-lg font-semibold capitalize text-orange-600'>{cls?.trainerInfo?.name}</h3>
                    <button className='bg-blue-600 py-1 px-3 text-sm text-white rounded-md'>View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default ClassDetail