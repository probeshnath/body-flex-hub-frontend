import React, { useEffect, useState } from 'react'
import Slot from './Slot'
import usePublicAxios from '../../../hooks/usePublicAxios'
import useAuth from '../../../hooks/useAuth'

const ManageSlots = () => {
  const [trainer, setTrainer] = useState(null)
  const publicAxios = usePublicAxios()
  const { user } = useAuth()

  useEffect(() => {
    publicAxios.get(`/users/${user.email}`)
      .then(res => {
        // console.log("tr", res.data)
        setTrainer(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
          trainer?.slots?.map((solt, inx) => <Slot key={inx} solt={solt} />)
        }

      </div>
    </div>
  )
}

export default ManageSlots