
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { PackageDetails } from "../Pages/Package Details/PackageDetails";
import { GuidePage } from "../Pages/Package Details/TourGuide/GuidePage";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { Demo } from "../Pages/demo";
import { Privateroute } from "./Privateroute";
import { Dashboard } from "../Layout/DashboardLayout/Dashboard";
import { ManageProfile } from "../Pages/DashBoard/Admin/ManageProfile";
import { AddPackage } from "../Pages/DashBoard/Admin/AddPackage";
import { ManageUser } from "../Pages/DashBoard/Admin/ManageUser";
import { ManageCandidates } from "../Pages/DashBoard/Admin/ManageCandidates";
import { TouristProfile } from "../Pages/DashBoard/Toursist/TouristProfile";
import { AddStory } from "../Pages/DashBoard/Toursist/AddStory/AddStory";
import { ManageStory } from "../Pages/DashBoard/Toursist/ManageStory/ManageStory";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {    path: "/",
            element:<Home></Home>
        },
        {    path: "/packagedetails",
            element:<Privateroute>
              <PackageDetails></PackageDetails>
            </Privateroute>
        }
        ,
        {    path: "/guides/:id",
            element:<GuidePage></GuidePage>,
           
          
            
        }
      ]
    },
    {
      path:"login",
      element:<Login></Login>
    },
    {
      path:"register",
      element:<Register></Register>
    },
    {
      path:"demo",
      element:<Demo></Demo>
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
     children:[
      // Admin Routes
      {
        path:"manageprofile",
        
        element:<ManageProfile></ManageProfile>
      }
      ,
      {
        path:"addpackage",
        
        element:<AddPackage></AddPackage>
      },
      {
        path:"manageUser",
        
        element:<ManageUser></ManageUser>
      },
      {
        path:"manageCandidates",
        
        element:<ManageCandidates></ManageCandidates>
      }
      // Tourist
      ,{
        path:'manageTouristProfile',
        element:<TouristProfile></TouristProfile>

      },
      {
        path:'addStory',
        element:<AddStory></AddStory>
      },
      {
        path:'manageStory',
        element:<ManageStory></ManageStory>
      },
      {
        path:'manageCandidates',
        element:<ManageCandidates></ManageCandidates>
      },
     ]
    }
  ]);

  export default router