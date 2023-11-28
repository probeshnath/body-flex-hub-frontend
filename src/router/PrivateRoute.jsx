import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <div className='flex justify-center items-center h-screen'><span className="loading loading-bars loading-lg"></span></div>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/signIn" replace />
    }
  return children;
}

export default PrivateRoute