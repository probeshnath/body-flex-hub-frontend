import React from 'react'
import TitleSection from '../shared/TitleSection'
import usePublicAxios from '../../hooks/usePublicAxios'
import { toast } from 'react-toastify'

const Newseltter = () => {
  const AxiosPublic = usePublicAxios()

  // save in database
  const handleNewsSeltter = (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const subscribe = {
      name: name,
      email: email
    }
    // console.log(subscribe)
    AxiosPublic.post("/newsletters",subscribe)
    .then(res =>{
      // console.log(res.data)
      if(res.data.insertedId){
        toast.success(`Thank you ${name} for your Subscription 😍`)
      }
    })
    .catch(error =>{
      // console.log(error)
      toast.error(error.message)
    })
  }
  return (
    <div className='py-10 bg-red-100'>
      <TitleSection title={"Subscribe Us"} description={"To Get Latest Update Us"} />
      <div className='justify-center max-w-7xl mx-auto px-3 pt-5 flex items-center'>
        <form onSubmit={handleNewsSeltter} className='md:w-1/2 w-full flex flex-col gap-3'>
          <div>
            <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered w-full " />
          </div>
          <div>
            <input type="email" placeholder="Type Your Email" name='email' className="input input-bordered w-full " />
          </div>
          <button type='submit' className='bg-orange-600 py-1 text-white font-bold rounded-md hover:bg-black'>Subscribe Now</button>
          
        </form>
      </div>
    </div>
  )
}

export default Newseltter