import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../../components/shared/SocialLogin'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { imageUpload } from '../../api/uploadImage'
import usePublicAxios from '../../hooks/usePublicAxios'




const SignUp = () => {
    const axiosPublic = usePublicAxios();
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const navigate = useNavigate()

    const {signUp,updateUserProfile} = useAuth();
    // console.log("my name is ",name)

    //  submit form
    const onSubmit = async (data) => {
        // console.log(data)

        try {
            // console.log(data)

            // 1. image host
            const imageData = await imageUpload(data.photo[0])
            // console.log(imageData)

            // 2. create user
           const result = await signUp(data.email, data.password)
           //    console.log(result)

            // 3. update user
            await updateUserProfile(data.name, imageData?.data?.display_url)
            toast.success("SignUp Successfully !!")
            // console.log(result)

            // 4. save data in database
            const userInfo = {
                name : data.name,
                email: data.email,
                role: "member"
            }
            
            axiosPublic.post("/users",userInfo)
            .then(res =>{
                if(res.data.insertedId){
                    toast.success("User Information Updated !!")
                    navigate("/")
                }
            })

            

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

       
    }
    return (
        <div>
            {/* <Helmet>
                <title>Teasty Treat | Register Page</title>
            </Helmet> */}
            <div className="h-screen  bg-base-200">
                <div className="px-3">
                    <div className=" lg:flex w-full h-screen py-8 flex-col lg:flex-row  shadow-2xl bg-base-100">
                        <div className='flex-1 w-full mx-auto  md:w-2/3'>
                            <h2 className='text-center text-3xl font-bold '>Welcome to <span className='text-orange-500'>BodyFlex Hub</span></h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter your Full Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                    <input {...register("email", { required: true })} type="email" name="email" placeholder=" Enter your Email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <input type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    {errors.photoURL && <span className="text-red-600">Photo is required</span>}
                                    <input {...register("photo", { required: true })} type="file" placeholder="Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="px-6 text-right -mt-5"><small>Already have an account <Link to="/signIn" className='text-blue-700 font-bold'>Sign In</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className='flex-1 hidden lg:block'>
                            <img className='h-full' src="https://i.ibb.co/y8p1GzQ/img-6.webp" alt="Signup" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp