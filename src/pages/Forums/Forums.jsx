import React from 'react'
import TitleSection from '../../components/shared/TitleSection'
import Post from './Post'
import { Helmet } from 'react-helmet-async'

const Forums = () => {
  return (
    <div className='py-10'>
      <Helmet>
        <title>BodyFlex Hub || Forums Page</title>
      </Helmet>
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