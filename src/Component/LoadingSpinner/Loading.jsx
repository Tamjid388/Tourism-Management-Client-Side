import React from 'react'
import { PulseLoader } from 'react-spinners'

export const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <PulseLoader
  color="#1cda5b"
  margin={6}
  size={25}
/>
    </div>
  )
}
