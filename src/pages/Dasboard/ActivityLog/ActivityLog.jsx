import React, { useEffect } from 'react'
import TitleSection from '../../../components/shared/TitleSection'
import usePublicAxios from '../../../hooks/usePublicAxios'
import useAuth from '../../../hooks/useAuth'

const ActivityLog = () => {
  const publicAxios = usePublicAxios()
  const {user} = useAuth()

  useEffect(()=>{
    // publicAxios.get(`/payments/${user.email}`)
    // .then(res =>{
    //   console.log(res.data)
     
    // })
    // .catch(error =>{
    //   console.log(error)
    // })
    
 
  },[])
  return (
    <div>
      <TitleSection title={"Activity Log"} description={"Which is change my bodyfitness "} />
      <div></div>
    </div>
  )
}

export default ActivityLog