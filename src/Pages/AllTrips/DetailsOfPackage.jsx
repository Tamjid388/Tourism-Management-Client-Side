import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsOfPackage = () => {
  const {id} =useParams()
  return (
    <div className='py-16'>DetailsOfPackage</div>
  )
}

