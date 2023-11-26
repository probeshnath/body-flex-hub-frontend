import React from 'react'
import TitleSection from '../../components/shared/TitleSection'

const BeTrainer = () => {
    return (
        <div className='py-10'>
            <div className='max-w-7xl mx-auto'>
                <TitleSection title={"Become A Trainer"} description={"To became profetional, come to here"} />
                {/*  */}
                <form className='w-full md:w-2/3 lg:w-1/2 mx-auto'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your full name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full " disabled />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Age</span>
                        </label>
                        <input type="number" placeholder="Type your Age" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Profile Picture</span>
                        </label>
                        <input type="file" placeholder="Insert your profile pic" className="input input-bordered w-full" />
                    </div>

                    {/* skills */}
                    <div className="form-control w-fit">
                        <label className="label">
                            <span className="label-text">Your Skills</span>
                        </label>

                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-success mr-3" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-success mr-3" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-success mr-3" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-success mr-3" />
                            <span className="label-text">Remember me</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-success mr-3" />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>

                    {/* available */}
                    <div className='flex gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Time in a week</span>
                            </label>
                            <input type="number" placeholder="Type your Age" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Time in a day</span>
                            </label>
                            <input type="number" placeholder="Type your Age" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className='flex justify-center pt-4'>
                        <button className='bg-orange-500 w-full py-1 text-lg font-bold text-white rounded-lg hover:bg-black'>Applied</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default BeTrainer