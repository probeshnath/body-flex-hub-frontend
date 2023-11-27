import React from 'react'
import { useForm } from 'react-hook-form'
import usePublicAxios from '../../../hooks/usePublicAxios'
import { imageUpload } from '../../../api/uploadImage'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'react-toastify'
import TitleSection from '../../../components/shared/TitleSection'

const AddNewClass = () => {
  const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
  const publicAxios = usePublicAxios()
  const {user} = useAuth()

  // find / get date
  let date = new Date();
  let currentTime = `${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()} `

  const handleAddClass = async (data) =>{
    try {

       // 1. image host
       const imageData = await imageUpload(data.photo[0])
       // console.log(imageData)

      //  2. class info
      const classInfo = {
        title: data.title,
        date: currentTime,
        bodyImg : imageData?.data?.display_url,
        description: data.description,
        trainer: user?.email
      }

      // save db
      publicAxios.post("/classes",classInfo)
      .then(res => {
        // console.log(res.data)
        if(res.data.insertedId){
          toast.success("Class added successfully")
        }
      })
      .catch(error =>{
        console.log(error)
      })


      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <TitleSection title={"Add New Class"} description={"To teach our students"} />
      <div className='flex justify-center items-center'>

        <form onSubmit={handleSubmit(handleAddClass)} className="card-body lg:w-2/3">

          <div className="form-control">
            {errors.title && <span className="text-red-600">Title is required</span>}
            <input {...register("title", { required: true })} type="text" name="title" placeholder="Enter your Class Title" className="input input-bordered" />
          </div>

          <div className="form-control">
            {errors.email && <span className="text-red-600">Email is required</span>}
            <textarea {...register("description", { required: true })} type="text" name="description" placeholder=" Enter your Class description" className="input input-bordered" />
          </div>

      
          <div className="form-control">
            {errors.photoURL && <span className="text-red-600">Photo is required</span>}
            <input {...register("photo", { required: true })} type="file" placeholder="Photo" className="input input-bordered" />
          </div>


          <div className="form-control mt-3">
            <input className="btn btn-primary" type="submit" value="Create Class" />
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddNewClass