import React, { useContext } from 'react'
import { useAxiosSecure } from '../../../../Hooks/useAxiosSecure'
import { Authcontext } from '../../../../Provider/Authprovider'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

export const MyAssignedTours = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(Authcontext)
    console.log(user);
    const { isPending,refetch, error, data:mybookings=[] } = useQuery({
        queryKey: ['bookings',user?.displayName],
        queryFn: async () => { 
          const response = await axiosSecure.get(`/guides/bookings?guideName=${user.displayName}`);
           
          return response.data;
          
        },
      })
      if(isPending){
        return <h1>Loading....</h1>
      }


      const handleReject=(bookingId)=>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to reject this booking!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reject it!',
            cancelButtonText: 'Cancel',
          })
          .then(async(result)=>{
            if(result.isConfirmed){
                Swal.fire(
                    'Rejected!',
                    'The booking has been rejected.',
                    'success'
                  );
                const response = await axiosSecure.put(`/bookings/rejectbooking/${bookingId}`);
                refetch()
            }
          })





      }

      const handleAccept=(bookingId)=>{
        console.log(bookingId);

        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to accept this booking!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, accept it!',
            cancelButtonText: 'Cancel',
          })
          .then(async(result)=>{
            if(result.isConfirmed){
                Swal.fire(
                    'Accepted!',
                    'The booking has been accepted.',
                    'success'
                  );
                  const response = await axiosSecure.put('/bookings/status', { bookingId });
                refetch()
            }
          })

      }
  return (
    <div className='px-2'>
        <h1 className='text-4xl font-bold'>MyAssignedTours {mybookings.length}</h1>
        <div>
            {
                mybookings.length === 0 ? (
                    <h2 className='text-red-500 text-xl font-bold mt-4'>No bookings assigned to you yet.</h2>
                  ):
                  <div className="overflow-x-auto">
  <table className="table table-zebra my-8">
    {/* head */}
    <thead>
      <tr>
      <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Tourist Name</th>
              <th className="border border-gray-300 px-4 py-2">Tour Details</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
     {
        mybookings.map((booking,idx)=>  <tr key={idx}>
            <th>{idx+1}</th>
            <td className="border border-gray-300 px-4 py-2">{booking.data.name}</td>
            <td className="border border-gray-300 px-4 py-2">
                  <p>PackageName:{booking.data.packageName}</p>
                  <p>Date:{booking.data.date}</p>
                  <p>Cost: {booking.data.price} USD</p>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-red-500">{booking.status}</td>
                <td className="border border-gray-300 px-4 py-2 ">
                    
                    {/* {booking.status==='Rejected'?
               <div className='space-x-1'>
               <button className="btn btn-sm bg-green-200 " disabled={booking.status==='Pending'&& true}>Accept</button>
               <button className="btn btn-sm bg-red-200">Reject</button>
               </div>
                  
                } */}
                        <div className='space-x-1'>
               <button onClick={()=>handleAccept(booking._id)} className="btn btn-sm bg-green-100 text-green-600" disabled={booking.status==='Pending'&& true}>Accept</button>
               <button onClick={()=>handleReject(booking._id)} className="btn btn-sm bg-red-100 text-red-600">Reject</button>
               </div>
                    </td>
          </tr>)
     }
    
   
    </tbody>
  </table> 
</div>
            }
        </div>
    </div>
  )
}
