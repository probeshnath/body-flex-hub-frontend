import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import TitleSection from '../../../components/shared/TitleSection'
import { imageUpload } from "../../../api/uploadImage";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import usePublicAxios from "../../../hooks/usePublicAxios";

const AddNewForum = () => {
  const {user} = useAuth()
  const publicAxios = usePublicAxios()
  let date = new Date();
  let currentTime = `${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()} `
  // console.log(currentTime)


  const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
  // post
  const handlePost = async (data) => {

    try {
      // save image for post
      const uploadImg = await imageUpload(data.photo[0])
      // console.log("img", uploadImg)

      const postInfo = {
        name: user?.displayName,
        date : currentTime,
        profile_pic: user?.photoURL,
        caption: data.caption,
        email: user?.email,
        body_pic: uploadImg?.data?.display_url,
        like:0,
        disLike:0
      }

      publicAxios.post("/forums",postInfo)
      .then(res =>{
        console.log(res.data)
      })
      .catch((error) =>{
        console.log(error)
      })

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <TitleSection title="Add New Forum" description="Our all post by Admin and Trainers" />
      <div className='flex flex-col py-10 md:flex-row gap-4'>
        <div className="bg-white h-fit py-10 px-5 rounded-lg">
          <form onSubmit={handleSubmit(handlePost)}>
            <textarea className="bg-gray-200 p-2 w-full" type="text" {...register("caption", { required: true })} placeholder='Please add Caption' cols="30" rows="10"></textarea>
            <input {...register("photo", { required: true })} type="file" placeholder="Photo" className="input input-bordered" />
            <div className="flex justify-evenly pt-4">
              <button className="font-semibold bg-blue-700 py-1 px-3 rounded-lg hover:bg-black text-white">Preview</button>
              <button type="submit" className="font-semibold bg-green-700 py-1 px-3 rounded-lg hover:bg-black text-white">Create Post</button>
            </div>
          </form>
        </div>
        <div>
          {/* <h2 className="text-2xl font-bold text-center py-4">Preview the Post</h2> */}
         <div className='border py-3 shadow-lg bg-white rounded-md px-2'>
            {/* header */}
            <div className='flex items-center pl-5 gap-2'>
              <img className='w-10 h-10 rounded-full' src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
              <div>
                <h3 className='font-bold text-xl'>My name is</h3>
                <p className='text-sm text-gray-500'>11/27/2023</p>
              </div>
            </div>
            <p className='pl-5 py-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ad? Odio sapiente eaque esse labore quasi placeat nihil quo veniam!</p>
            <img src="https://i.ibb.co/686tyHs/probesh-deb-nath.jpg" alt="" />
            {/* like || dislike */}
            <div className='flex pt-3 justify-evenly'>
              <button className='flex items-center gap-2 border px-3 rounded-md font-bold'><BiLike /> Like</button>
              <button className='flex items-center gap-2 border px-3 rounded-md font-bold'><AiOutlineDislike /> DisLike</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default AddNewForum