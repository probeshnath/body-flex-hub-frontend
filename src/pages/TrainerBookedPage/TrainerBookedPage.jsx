import React from 'react'
import TitleSection from '../../components/shared/TitleSection'
import { FaDollarSign } from "react-icons/fa6";
import { SiVerizon } from "react-icons/si";

const TrainerBookedPage = () => {
    return (
        <div className='py-10'>
            <div className='max-w-7xl mx-auto'>
                <TitleSection title={"Trainer Booked Page"} description={"We are Happy To Connected With you"} />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 px-3  gap-3'>
                    {/* silver */}
                    <div className="border-2 px-3 rounded-md py-4">
                        <h2 className='text-4xl text-center'>Silver </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> 20 <span className='text-base'> /month</span></h3>
                        <div>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                        </div>
                        <button className='bg-orange-500 w-full rounded-md font-bold hover:bg-blue-700 hover:text-white py-1 mt-4'>Join Now</button>
                    </div>
                    {/* Diamond */}
                   < div className="border-2 px-3 rounded-md py-4">
                        <h2 className='text-4xl text-center'>Diamond </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> 100 <span className='text-base'> /month</span></h3>
                        <div>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                        </div>
                        <button className='bg-orange-500 font-bold py-1  w-full hover:bg-blue-700 hover:text-white rounded-md mt-4'>Join Now</button>
                    </div>
                    {/* gold pace */}
                    <div className="border-2 rounded-md px-3 py-4">
                        <h2 className='text-4xl text-center'>Gold </h2>
                        <h3 className='flex items-center text-2xl justify-center my-4'><FaDollarSign className='text-3xl' /> 50 <span className='text-base'> /month</span></h3>
                        <div>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                            <p className='flex items-center gap-2'><SiVerizon className='text-green-600' /> the hysusjsdsd codsk ds sd</p>
                        </div>
                        <button className='bg-orange-500 w-full font-bold py-1 hover:bg-blue-700 hover:text-white  rounded-md mt-4'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerBookedPage