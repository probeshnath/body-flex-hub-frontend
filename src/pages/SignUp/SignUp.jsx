import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

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
                    <div className=" lg:flex w-full h-screen py-10 flex-col lg:flex-row  shadow-2xl bg-base-100">
                        <div className='flex-1 w-full mx-auto  md:w-2/3'>
                            <h2 className='text-center text-2xl font-bold '>Welcome to <span>BodyFlex Hub</span></h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>

                                    <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="px-6"><small>Already have an account <Link to="/login">Login</Link></small></p>
                            {/* <SocialLogin></SocialLogin> */}
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