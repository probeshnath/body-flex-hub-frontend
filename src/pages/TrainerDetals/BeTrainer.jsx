import React, { useState } from 'react'
import TitleSection from '../../components/shared/TitleSection'
import useAuth from '../../hooks/useAuth'
import usePublicAxios from '../../hooks/usePublicAxios'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

const BeTrainer = () => {
    const [skills, setSkills] = useState([])
    const { user } = useAuth()
    const publicAxios = usePublicAxios()
    // console.log(user)
    //  get multiple skills
    function handleSkill(event) {
        const { value, checked } = event.target;

        if (checked) {
            setSkills(pre => [...pre, value])
        } else {
            setSkills(pre => {
                return [...pre.filter(skill => skill !== value)]
            })
        }

    }
    // console.log(skills)

    const handleApplied = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const img = user?.photoURL;
        const available_week = form.available_week.value;
        const available_day = form.available_day.value;



        // img upload

        const appliedUser = {
            name,
            email,
            age,
            img,
            available_day,
            available_week,
            skills,
            slots: []
        }
        // console.log(appliedUser)

        function addSlots(object, numberOfSlots) {
            // Check if "slots" property already exists, if not, create it as an array
            object.slots = object.slots || [];

            // Add objects to the "slots" array based on the specified number
            for (let i = 0; i < numberOfSlots; i++) {
                object.slots.push({ 
                    slot_name: `Slot ${i + 1}`,
                    price: 50,
                    cls_time: 6 + i
                 });
            }
        }

        addSlots(appliedUser, available_day);


        // send backend to applied
        publicAxios.patch(`/beTrainer/${user.email}`, appliedUser)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success("Request Submitted")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='py-10'>
            <Helmet>
                <title>BodyFlex Hub || Be Traiber Page</title>
            </Helmet>
            <div className='max-w-7xl mx-auto'>
                <TitleSection title={"Become A Trainer"} description={"To became profetional, come to here"} />
                {/*  */}
                <form onSubmit={handleApplied} className='w-full md:w-2/3 lg:w-1/2 mx-auto'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your full name?</span>
                        </label>
                        <input type="text" placeholder="Type your Name" defaultValue={user?.displayName} name='name' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" placeholder='Enter your Email' defaultValue={user?.email} name='email' className="input input-bordered w-full " disabled />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Age</span>
                        </label>
                        <input type="number" name='age' placeholder="Type your Age" className="input input-bordered w-full" />
                    </div>
                    {/* <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Profile Picture</span>
                        </label>
                        <input type="file" name='img' placeholder="Insert your profile pic" className="input input-bordered w-full" />
                    </div> */}

                    {/* skills */}
                    <div className="form-control  w-fit">
                        <label className="label">
                            <span className="label-text">Your Skills</span>
                        </label>

                        <label className="cursor-pointer label">
                            <input type="checkbox" value="Adaptability" onChange={handleSkill} className="checkbox checkbox-success mr-3" />
                            <span className="label-text w-full text-left">Adaptability</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" value="Exercide Physiology" onChange={handleSkill} className="checkbox checkbox-success mr-3" />
                            <span className="label-text w-full text-left">Exercide Physiology</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" value="Injury Prevention Knowledge" onChange={handleSkill} className="checkbox checkbox-success mr-3" />
                            <span className="label-text w-full text-left">Injury Prevention Knowledge</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" value="Time Management" onChange={handleSkill} className="checkbox checkbox-success mr-3" />
                            <span className="label-text w-full text-left">Time Management</span>
                        </label>
                        <label className="cursor-pointer label">
                            <input type="checkbox" value="Patience" onChange={handleSkill} className="checkbox checkbox-success mr-3" />
                            <span className="label-text w-full text-left">Patience</span>
                        </label>
                    </div>

                    {/* available */}
                    <div className='flex gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Time in a week</span>
                            </label>
                            <input type="number" name='available_week' placeholder="Type your Available Time in a week" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Time in a day</span>
                            </label>
                            <input type="number" name='available_day' placeholder="Type your Available Time in a day" className="input input-bordered w-full" />
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