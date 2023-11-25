import React from 'react'

const TitleSection = ({title,description}) => {
  return (
    <div className='text-center'>
        <h3 className='text-4xl font-bold text-orange-500'>{title}</h3>
        <p className='text-gray-500'>--- {description}  ---</p>
    </div>
  )
}

export default TitleSection