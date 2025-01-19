import React from "react";
import { AiFillCarryOut } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdAddChart, MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  let user = "admin";
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
          <div className="bg-red-400 mx-2">
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
            {user ===" " && (
             <div className="space-y-3">
              <li className="shadow-md rounded-md">
                <Link>
                  <MdManageAccounts className="text-xl"></MdManageAccounts>
                  Manage Profile
                </Link>
              
              </li>
             
              <li className="shadow-md rounded-md">
                <Link>
                  <MdAddChart className="text-xl"></MdAddChart>
                  Add Package
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link>
                  <AiFillCarryOut className="text-xl"></AiFillCarryOut>
                  Manage Users
                </Link>
              
              </li>
              <li className="shadow-md rounded-md">
                <Link>
                  <MdOutlineManageHistory className="text-xl"></MdOutlineManageHistory>
                  Manage Candidates 
                </Link>
              
              </li>
              
              
              </div>
             
            )}


            {/* User Admin */}
            {user == "admin" && (
             <div className="space-y-3">
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

            {/* For Tour Guide */}
            {user == "guide" && (
               <div className="space-y-3">
               <li className="shadow-md rounded-md">
                 <Link>
                   <MdManageAccounts className="text-xl"></MdManageAccounts>
                   Manage Profile
                 </Link>
               
               </li>
               <li className="shadow-md rounded-md">
                 <Link>
                   <AiFillCarryOut className="text-xl"></AiFillCarryOut>
                   My Assigned Tours
                 </Link>
               
               </li>
               <li className="shadow-md rounded-md">
                 <Link>
                   <MdAddChart className="text-xl"></MdAddChart>
                   Add  Stories
                 </Link>
               
               </li>
               <li className="shadow-md rounded-md">
                 <Link>
                   <MdOutlineManageHistory className="text-xl"></MdOutlineManageHistory>
                   Manage Stories
                 </Link>
               
               </li>
               
               
               </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
