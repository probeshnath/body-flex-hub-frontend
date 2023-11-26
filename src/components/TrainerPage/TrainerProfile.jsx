import React from 'react'

const TrainerProfile = () => {
  return (
    <div className='bg-slate-50 rounded-lg shadow-md'>
         {/* components */}
         <div className="p-2 overflow-hidden transition-transform">
                    <img className='w-full object-center rounded-t-lg ' src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
                    <div className='py-3'>
                        <h3 className='text-2xl font-bold'>Trainer Name</h3>
                        <p className='text-sm text-gray-400 '>3 years Experience</p>

                        {/* abilable slot */}
                                <p>Avaliable :</p> 
                            <div className='flex justify-between '>
                                <p className='bg-green-400 p-1 text-sm font-bold rounded-full '>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                                <p>8 PM</p>
                            </div>
                        <div>
                            {/* social media icons */}
                        </div>
                        <button className='text-center hover:bg-black mt-2 w-full bg-orange-500 py-1 rounded-lg font-bold text-white'>Know More</button>
                    </div>
                </div>
    </div>
  )
}

export default TrainerProfile