import React from 'react'
import TitleSection from '../shared/TitleSection'
import SingleFeaturedClass from './SingleFeaturedClass'

const FeaturedClass = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-10'>
        <TitleSection title={"Featured Classes"} description={"Our Best Class Makes you Fit"} />
        {/* featured class */}
        <div className='grid grid-cols-1 px-3 gap-3 py-8 md:grid-cols-2'>
          <SingleFeaturedClass />
          <SingleFeaturedClass />
          <SingleFeaturedClass />
          <SingleFeaturedClass />
          <SingleFeaturedClass />
          <SingleFeaturedClass />
         
        </div>
      </div>
    </div>
  )
}

export default FeaturedClass