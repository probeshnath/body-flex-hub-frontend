import React, { useEffect, useState } from 'react'
import TitleSection from '../../components/shared/TitleSection'
import Post from './Post'
import { Helmet } from 'react-helmet-async'
import usePublicAxios from '../../hooks/usePublicAxios'


const Forums = () => {
  const publicAxios = usePublicAxios()
  const [forums, setForums] = useState(null)
  useEffect(() =>{
    publicAxios.get("/forums")
    .then(res => {
      // console.log(res.data)
      setForums(res.data)
  })
  .catch(error => {
      console.log(error)
  })
  },[])
  return (
    <div className='py-10'>
      <Helmet>
        <title>BodyFlex Hub || Forums Page</title>
      </Helmet>
        <div className='max-w-7xl mx-auto'>
            <TitleSection title={"Forums"} description={"All of the Post"} />
            <div className='grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                
                {
                  forums?.map(forum => (
                    <Post key={forum._id} forum={forum} />
                  ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Forums