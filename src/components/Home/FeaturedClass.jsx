import React, { useEffect, useState } from 'react'
import TitleSection from '../shared/TitleSection'
import SingleFeaturedClass from './SingleFeaturedClass'
import usePublicAxios from '../../hooks/usePublicAxios'
import { Link } from 'react-router-dom'

const FeaturedClass = () => {
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
      <div className='max-w-7xl mx-auto py-10'>
        <TitleSection title={"Featured Classes"} description={"Our Best Class Makes you Fit"} />
        {/* featured class */}
        <div className='grid grid-cols-1 px-3 gap-3 py-8 md:grid-cols-2 lg:grid-cols-4'>
          {
            allClass?.slice(0, 8).map(item => (

              <SingleFeaturedClass key={item._id} item={item} />
            ))
          }

        </div>
        <div className='flex justify-center'>
         <Link to="classes" > <button className='bg-orange-500 py-1 w-fit px-3 text-white font-semibold rounded-md hover:bg-black mx-auto' >See All Class</button></Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedClass