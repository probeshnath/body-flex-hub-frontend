import React from 'react'
import TitleSection from '../../components/shared/TitleSection'
import Post from './Post'

const Forums = () => {
  return (
    <div className='py-10'>
        <div className='max-w-7xl mx-auto'>
            <TitleSection title={"Forums"} description={"All of the Post"} />
            <div className='grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    </div>
  )
}

export default Forums