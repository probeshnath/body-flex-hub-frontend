import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePublicAxios from '../../hooks/usePublicAxios'
import TitleSection from '../shared/TitleSection'

const BlogArticles = () => {
  const publicAxios = usePublicAxios()
  const [allForums, setAllForms] = useState(null)

  useEffect(() => {
    publicAxios.get("/forums")
      .then(res => {
        // console.log(res.data)
        setAllForms(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <div>
        <div className='max-w-7xl mx-auto py-10'>
          <TitleSection title={"Forums Posts"} description={"Our recent few post"} />
          {/* featured class */}
          <div className='grid grid-cols-1 px-3 gap-3 py-8 md:grid-cols-2 lg:grid-cols-4'>
            {
              allForums?.slice(0, 4).map((forum,inx) => (

                <div key={inx} className='border py-3 shadow-lg rounded-md px-2'>
                {/* header */}
                <div className='flex items-center pl-5 gap-2'>
                    <img className='w-10 h-10 rounded-full' src={forum?.profile_pic} alt="" />
                    <div>
                        <h3 className='font-bold capitalize text-xl'>{forum?.name}</h3>
                        <p className='text-xs text-gray-500'>{forum?.date}</p>
                    </div>
                </div>
                <p className='pl-5 py-2 text-gray-600 text-sm'>{forum?.caption}</p>
                <img className='w-full h-52 object-cover' src={forum?.body_pic} alt="" />
                
            </div>
              ))
            }

          </div>
          <div className='flex justify-center'>
            <Link to="/forums" > <button className='bg-orange-500 py-1 w-fit px-3 text-white font-semibold rounded-md hover:bg-black mx-auto' >See All Post</button></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BlogArticles