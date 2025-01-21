import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Authcontext } from '../Provider/Authprovider'
import { useAxiosSecure } from './useAxiosSecure'

export const useAdmin = () => {
    const {user}=useContext(Authcontext)
    const axiosSecure=useAxiosSecure()
  const {data:isAdmin}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
        const res=await axiosSecure.get(`/allusers/admin/${user.email}`)
        return res.data?.admin
    }
  })
  return [isAdmin]
}
