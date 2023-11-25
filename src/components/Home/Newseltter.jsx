import React from 'react'
import TitleSection from '../shared/TitleSection'

const Newseltter = () => {
  return (
    <div className='py-10 bg-red-100'>
      <TitleSection title={"Subscribe Us"} description={"To Get Latest Update Us"} />
      <div className='justify-center max-w-7xl mx-auto px-3 pt-5 flex items-center'>
        <form className='md:w-1/2 w-full flex flex-col gap-3'>
          <div>
            <input type="text" placeholder="Type Your Name" className="input input-bordered w-full " />
          </div>
          <div>
            <input type="email" placeholder="Type Your Email" className="input input-bordered w-full " />
          </div>
          <button className='bg-orange-600 py-1 text-white font-bold rounded-md hover:bg-black'>Subscribe Now</button>
          
        </form>
      </div>
    </div>
  )
}

export default Newseltter