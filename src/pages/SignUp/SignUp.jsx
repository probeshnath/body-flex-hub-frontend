import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import SocialLogin from '../../components/shared/SocialLogin'

const SignUp = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()

    //  submit form
    const onSubmit = (data) => {
        console.log(data)
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
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                    <input {...register("photoURL", { required: true })} type="file" placeholder="Photo URL" className="input input-bordered" />
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