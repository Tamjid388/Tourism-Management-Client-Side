
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
    }
  ]);

  export default router