import React, { useEffect, useState } from 'react'
import TitleSection from '../../../components/shared/TitleSection'
import usePublicAxios from '../../../hooks/usePublicAxios'
import { Link } from 'react-router-dom'

const RecommendedClasses = () => {
  const publicAxios = usePublicAxios()
  const [allClass, setAllClass] = useState(null)

  useEffect(() => {
    publicAxios.get("/classes")
      .then(res => {
        // console.log(res.data)
        setAllClass(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <TitleSection title={"Recommended Classes"} description={"You can read that class"} />
      <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-3 gap-4'>
          {
            allClass?.slice(0,10).map(cls => (
              // 
              <div className='bg-white shadow-lg p-3 rounded-md'>
                <img src={cls.bodyImg} alt={cls.title} className='h-32 w-full object-center rounded-md' />
                <h3 className='text-xl font-bold capitalize pt-2 pl-2'>{cls.title}</h3>
                <Link to={`/classes/${cls._id}`}> <button className='bg-orange-500 p-1 text-sm px-2 w-full font-bold text-white rounded-md hover:bg-black'>Show Detail</button></Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecommendedClasses