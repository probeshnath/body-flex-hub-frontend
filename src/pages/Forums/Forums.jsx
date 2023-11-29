import React, { useEffect, useState } from 'react'
import TitleSection from '../../components/shared/TitleSection'
import Post from './Post'
import { Helmet } from 'react-helmet-async'
import usePublicAxios from '../../hooks/usePublicAxios'


const Forums = () => {
  const publicAxios = usePublicAxios()
  const [forums, setForums] = useState(null)
  const [count, setCount] = useState(0)

  // pagination
  const [currentPage, setCurrentPage] = useState(0)
  // const count = forums?.length;
  const itemPerPage = 6
  const numberofPage = Math.ceil(count / itemPerPage)
  // console.log(count)
  const pages = [...Array(numberofPage).keys()]

  const handlePrevPage = () =>{
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () =>{
    if(currentPage < pages?.length - 1 ){
      setCurrentPage(currentPage + 1)
    }
  }



  useEffect(() => {
    publicAxios.get(`/forums?page=${currentPage}&size=${itemPerPage}`)
      .then(res => {
        // console.log(res.data)
        setForums(res.data)
        // setCount(res.data.length)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentPage,itemPerPage])

  
  useEffect(() => {
    publicAxios.get(`/forums`)
      .then(res => {
        // console.log(res.data)
        // setForums(res.data)
        setCount(res.data.length)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentPage,itemPerPage])
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
        
        <div className='flex justify-center items-center mt-10'>
          <button className='bg-gray-500  mr-2' onClick={handlePrevPage}>Prev</button>
          {
            pages?.map(page => <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? ' p-1 bg-orange-500 text-white mr-2 w-10 rounded-full h-10 ' : "bg-gray-500  w-10 rounded-full h-10 p-1 mr-2"} >{page}</button>)
          }
          <button onClick={handleNextPage} className='bg-gray-500  '>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Forums