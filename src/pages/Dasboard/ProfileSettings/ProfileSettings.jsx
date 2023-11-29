import React, { useState } from 'react'
import TitleSection from '../../../components/shared/TitleSection'
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'

const ProfileSettings = () => {
  const { user } = useAuth()
  const [skills, setSkills] = useState([])

  // for multiple checkbok
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


  const handleUpdateUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const height = form.height.value;
    const age = form.age.value;
    const blood = form.blood.value;
    const description = form.description.value;

    const userInfo = {
      name,
      height,
      age,
      blood,
      skills,
      description
    }
    // console.log(userInfo)
    
  }


  return (
    <div>
      <Helmet>
        <title>BodyFlex Hub || Be Traiber Page</title>
      </Helmet>
      <TitleSection title={"My Profile Setting"} description={"Edit to show your best"} />
      <div className='py-10'>

        <div className='max-w-7xl mx-auto'>


          <form onSubmit={handleUpdateUser} className='w-full md:w-2/3 lg:w-1/2 mx-auto'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">What is your full name?</span>
              </label>
              <input type="text" placeholder="Type your Name" defaultValue={user?.displayName} name='name' className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Height</span>
              </label>
              <input type="number" placeholder='Enter your height' name='height' className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Age</span>
              </label>
              <input type="number" name='age' placeholder="Type your Age" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Blood Group</span>
              </label>
              <input type="text" name='blood' placeholder="your blood group " className="input input-bordered w-full" />
            </div>

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



            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea type="text" name='description' placeholder="Type about your " className="input input-bordered w-full" />
            </div>



            <div className='flex justify-center pt-4'>
              <button className='bg-orange-500 w-full py-1 text-lg font-bold text-white rounded-lg hover:bg-black'>Update</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings