
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { PackageDetails } from "../Pages/Package Details/PackageDetails";
import { GuidePage } from "../Pages/Package Details/TourGuide/GuidePage";
import { Login } from "../Pages/Login/Login";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {    path: "/",
            element:<Home></Home>
        },
        {    path: "/packagedetails",
            element:<PackageDetails></PackageDetails>
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
    }
  ]);

  export default router