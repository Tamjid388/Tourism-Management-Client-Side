import React, { useContext } from "react";
import { AiFillCarryOut } from "react-icons/ai";
import { FaHome, FaWpforms } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdAddChart, MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { Authcontext } from "../../Provider/Authprovider";
import { useAdmin } from "../../Hooks/useAdmin";
import { FaPeopleRoof } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";

export const Dashboard = () => {
    const {user}=useContext(Authcontext)
    const axiosSecure=useAxiosSecure()
  
 const { isPending, error, data:userROle=[],refetch } = useQuery({
    queryKey: ['allusers',user?.email],
    queryFn: async () => { 
      const response = await axiosSecure.get(`/allusers?email=${user.email}`);
      ; 
      return response.data;
      
    },
  })
  // console.log(userROle.role);
  


    // let user='tourist' 
    // const [isAdmin]=useAdmin()
    // console.log(isAdmin);
    // let role='admin'
 
  return (
    <div className="flex ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  items-center ">
          {/* Page content here */}

          <div className="m-2 relative left-2  w-full">
            <label
              htmlFor="my-drawer-2"
              className=" btn  btn-outline  drawer-button lg:hidden"
            >
              <h1 className="text-start">
                <IoMenu />
              </h1>
            </label>
          </div>
          <div className=" container mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
           
             <li className="shadow-md rounded-md ">
                <Link to={"/"}>
                  <FaHome className="text-xl"></FaHome>
                  Home
                </Link>
              
              </li>
              <div className="divider my-6"></div>



            {/* Sidebar content here */}

              {/* User tourist */}
            {userROle?.role==='tourist' && (
             <div className="space-y-3">
              <li>
                <h1 className="text-xl text-green-600 font-bold">Tourist Dashboard</h1>
              </li>
              <li className="shadow-md rounded-md">
                <Link to='manageTouristProfile'>
                  <MdManageAccounts className="text-xl"></MdManageAccounts>
                  Manage Profile
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link to='mybookings'>
                  <FaWpforms className="text-xl"></FaWpforms>
                  My Bookings
                </Link>
              
              </li>
             
              <li className="shadow-md rounded-md">
                <Link to={'addStory'}>
                  <MdAddChart className="text-xl"></MdAddChart>
                  Add Stories
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link to={'manageStory'}>
                <MdOutlineManageHistory className="text-xl"></MdOutlineManageHistory>
                  Manage Stories
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link to={'joinAstourguide'}>
                <FaPeopleRoof className="text-xl"></FaPeopleRoof>
                  Join As Tour Guide
                </Link>
              
              </li>
            
              
              
              </div>
             
            )}


            {/* User Admin */}
            {userROle?.role==='admin' && (
             <div className="space-y-3">
              <li>
                <h1 className="text-xl text-green-600 font-bold">Admin Dashboard</h1>
              </li>

              <li className="shadow-md rounded-md">
                <Link to={"manageProfile"}>
                  <MdManageAccounts className="text-xl"></MdManageAccounts>
                  Manage Profile
                </Link>
              
              </li>
             
              <li className="shadow-md rounded-md">
                <Link to={"addpackage"}>
                  <MdAddChart className="text-xl"></MdAddChart>
                  Add Package
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link to={'manageUser'}>
                  <AiFillCarryOut className="text-xl"></AiFillCarryOut>
                  Manage Users
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link to={'manageCandidates'}>
                  <MdOutlineManageHistory className="text-xl"></MdOutlineManageHistory>
                  Manage Candidates 
                </Link>
              
              </li>
              
              
              </div>
             
            )}

            {/* For Tour Guide  tourguide*/}
            {userROle?.role== "tourguide" && (
               <div className="space-y-3">
                 <li>
                <h1 className="text-xl text-green-600 font-bold text-nowrap">Tour Guide Dashboard</h1>
              </li>
               <li className="shadow-md rounded-md">
                 <Link to={'manageguideprofile'}>
                   <MdManageAccounts className="text-xl"></MdManageAccounts>
                   Manage Profile
                 </Link>
               
               </li>
               <li className="shadow-md rounded-md">
                 <Link to={'myassinedtours'}>
                   <AiFillCarryOut className="text-xl"></AiFillCarryOut>
                   My Assigned Tours
                 </Link>
               
               </li>
               <li className="shadow-md rounded-md">
                 <Link to={'guideStories'}>
                   <MdAddChart className="text-xl"></MdAddChart>
                   Add  Stories
                 </Link>
               
               </li>
               {/* <li className="shadow-md rounded-md">
                 <Link>
                   <MdOutlineManageHistory className="text-xl"></MdOutlineManageHistory>
                   Manage Stories
                 </Link>
               
               </li> */}
               
               
               </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
