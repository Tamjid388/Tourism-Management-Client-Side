import React from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaUser } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Swal from 'sweetalert2'

export const ManageUser = () => {
    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:["allusers"],
        queryFn:async()=>{
            const res=await axiosSecure.get("/allusers"
          )
            return res.data
        }
    })
   const handleAction=(user)=>{
    axiosSecure.patch(`/allusers/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch()
            Swal.fire(`${user.name} is an Admin now`);
        } 
        
    })
   }
  return (
    <div >
        <h2 className="text-4xl my-4 font-bold">Manage Users</h2>
    <div className="flex justify-evenly my-4 bg-gray-100">
       
    <h2 className="text-3xl font-bold">All Users</h2>
    <h2 className="text-3xl font-bold">Total Users:{users.length}</h2>
    </div>
       <div className="overflow-x-auto">
 <table className="table table-zebra">
   {/* head */}
   <thead>
     <tr
     className="">
       <th>No.</th>
       <th>Name</th>
       <th>Email</th>
       <th>Role</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
     {/* row 1 */}
     {
       users.map((user,idx)=> <tr key={user._id}>
           <th>{idx+1}</th>
           <td>{user.name}</td>
           <td>{user.email}</td>
           <td>
          {user.role==="admin"?"Admin": <button onClick={()=>handleAction(user)} className="btn text-xl bg-orange-500">
                  <FaUser className="text-white"></FaUser>
               </button>}
           </td>
           <td>
               <button  className="btn text-xl bg-red-500">
                  <MdDelete className="text-white"></MdDelete>
               </button>
           </td>
         </tr>
      )
     }
    
   </tbody>
 </table>
</div>

   </div>
  )
}
