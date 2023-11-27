import React from 'react'
import TitleSection from '../../components/shared/TitleSection'
import { Helmet } from 'react-helmet-async'

const ClassesPage = () => {
  return (
    <div className='py-10'>
      <Helmet>
        <title>BodyFlex Hub || Classes Page</title>
      </Helmet>
        <div>
            <TitleSection title={"All Classes"} description={"Our all class for your fitness"} />
        </div>
    </div>
  )
}

export default ClassesPage