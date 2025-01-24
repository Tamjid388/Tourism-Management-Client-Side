import React, { useEffect, useState } from 'react'
import { useAxiosPublic } from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export const ManageCandidates = () => {
  const axiosPublic=useAxiosPublic()
  const axiosSecure=useAxiosSecure()
  const [applications, setApplications] = useState([]);
  const { isPending, error, data,refetch } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => { 
      const response = await axiosPublic.get('/application');
      console.log(response.data); 
      return response.data;
      
    },
  })
  useEffect(() => {
    if (data) {
      setApplications(data);
    }
  }, [data]);
  if(isPending){
    return <h1>Loading....</h1>
  }


  const handleAccept=(email)=>{
    axiosSecure.patch(`/applications/accept/${email}`)
    .then((res) => {
      console.log(res.data);
      setApplications(applications.filter(app => app.email !== email)); // Remove from list
      Swal.fire('Application accepted successfully!');
      refetch()
    })

  }

  const handleReject = (email) => {
    axiosSecure.delete(`/applications/reject/${email}`)
      .then((res) => {
        console.log(res.data);
        refetch(); // Refresh data from the server
        Swal.fire('Application rejected successfully!');
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <div>
      <h1 className='text-4xl font-bold'>ManageCandidates</h1>

      <div className='my-12'>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-gray-200'>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Serial</th>
        <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Application Title</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>


      {/* row 1 */}
    
   {
    applications.map((application,index)=>  <tr>
      <th>{index+1}</th>
      <td>{application.email}</td>
      <td>{application.applicationTitle}</td>
      
      <td>Tourist</td>
      <td className='space-x-2'>
        <button 
        onClick={()=>handleAccept(application.email)}
        
        className='btn text-green-500'>
          
          Accept</button>
        <button
        onClick={()=>handleReject(application.email)}
        className='btn text-red-500'>Reject</button>
      </td>
    </tr>

    )
   }
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}
