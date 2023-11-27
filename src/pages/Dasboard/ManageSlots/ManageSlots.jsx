import React from 'react'
import Slot from './Slot'

const ManageSlots = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-4'>
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
      </div>
    </div>
  )
}

export default ManageSlots