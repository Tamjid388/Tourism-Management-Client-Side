import React, { useContext } from 'react'
import { Authcontext } from '../../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import { useAxiosPublic } from '../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

export const ProfileDropdown = () => {

    const {user,signOutUser}=useContext(Authcontext)
    const axiosPublic=useAxiosPublic()
    const { isPending, error, data:userprofile } = useQuery({
        queryKey: ['profileuser',user?.email],
        queryFn: async () => { 
          const response = await axiosPublic.get(`/user/${user.email}`);
          // console.log(response.data); 
          return response.data;
          
        },
      })
   
      if(isPending){
        return <h1>Loading....</h1>
      }
      const handleSignout=()=>{
        signOutUser()
        .then(()=>{
          console.log("Signout Successfull");
          Swal.fire({
            title: "Signout Successfull!",
            icon: "success",
            draggable: true
          });
          
        })
        .catch((error)=>{
          console.log("Signout Failed",error);
        })
      }
  return (
    <div>
        <div className="flex-none gap-2 md:mr-2">
   
   <div className="dropdown dropdown-end">
     <div tabIndex={0} role="button" className="btn btn-ghost border-2 border-green-700 btn-circle avatar">
       <div className="w-10 rounded-full">
         <img
           alt="profile"
           src={userprofile?.photo} />
       </div>
     </div>
     <ul
       tabIndex={0}
       className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3
        w-52 p-3 font-semibold shadow space-y-2">
       
      
       {/* <Link className='text-green-600' to={"dashboard/dashboardWelcome"}>Dashboard</Link> */}
       {
       userprofile?.role==="admin"&&
        <Link 
        className='text-green-600'
         to={"dashboard/manageProfile"}>Dashboard</Link>
       }
       {
       userprofile?.role==="tourist"&&
        <Link 
        className='text-green-600'
         to={"dashboard/manageTouristProfile"}>Dashboard</Link>
       }
    
      
       <li className=''>
       {userprofile?.name}
       </li>
       <li className=''>
       {userprofile?.email}
       </li>
       <Link onClick={handleSignout} className="btn btn-sm">Logout</Link>
     </ul>
   </div>
 </div>
    </div>
  )
}
