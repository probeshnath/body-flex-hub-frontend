import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import SocialLogin from '../../components/shared/SocialLogin'

const SignIn = () => {
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
          <div className=" lg:flex items-center w-full h-screen py-8 flex-col lg:flex-row  shadow-2xl bg-base-100">
            <div className='flex-1 w-full  mx-auto  md:w-2/3'>
              <h2 className='text-center text-3xl font-bold '>Welcome to <span className='text-orange-500'>BodyFlex Hub</span></h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body px-5">

                <div className="form-control">
                  <input {...register("email", { required: true })} type="email" name="email" placeholder=" Enter your Email" className="input input-bordered" />
                </div>

                <div className="form-control">
                  <input type="password" {...register("password",)} placeholder="Enter Your Password" className="input input-bordered" />
                </div>

                <div className="form-control mt-3">
                  <input className="btn btn-primary" type="submit" value="Sign In" />
                </div>

              </form>
              <p className="px-6 text-right -mt-5"><small>Already have an account <Link to="/signUp" className='text-blue-700 font-bold'>Sign Up</Link></small></p>
              <SocialLogin></SocialLogin>
            </div>
            <div className='flex-1 hidden lg:block'>
              <img className='h-full' src="https://i.ibb.co/hCrZgVT/login-bg.png" alt="SignIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn