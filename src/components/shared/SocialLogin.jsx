import React from 'react'
import logo from '../../assets/google.png'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import usePublicAxios from '../../hooks/usePublicAxios'

const SocialLogin = () => {

  const navigate = useNavigate()
  const {handleGoogleLogin} = useAuth()
  const PublicAxios = usePublicAxios();

  const googleLogin = () =>{
    handleGoogleLogin()
    .then((data) => {
      console.log(data.user)

      // 4. save data in database
      const userInfo = {
        name : data?.user?.displayName,
        email: data?.user?.email,
        role: "member"
    }
    
    PublicAxios.post("/users",userInfo)
    .then(res =>{
        if(res.data.insertedId){
            toast.success("User Information Updated !!")
            navigate("/")
            // navigate(location?.state ? location?.state : "/")
        }
    })


    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
         <div className="divider ">Or Sign In With</div>
        <button onClick={googleLogin} className='flex bg-blue-800 rounded-md mx-auto py-2 px-5 text-white gap-2 font-bold'> <img className='w-6' src={logo} alt="google" /> Continue With Google</button>
    </div>
  )
}

export default SocialLogin