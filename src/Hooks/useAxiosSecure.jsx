// import axios from "axios"

// export const axiosSecure=axios.create(
//     {
//       
//     }
// )
// export const useAxiosSecure = () => {
//   axiosSecure
//   return axiosSecure
// }
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../Provider/Authprovider"


export const axiossecure=axios.create({
    baseURL:'https://tourism-management-server-side-olive.vercel.app/'
})
export const useAxiosSecure = () => {
    const navigate =useNavigate()
    const {signOutUser}=useContext(Authcontext)
    // Request interceptor to add authorization header for every secure call for api
 axiossecure.interceptors.request.use(function(config){
    const token=localStorage.getItem("access-token")
    // console.log("Request stopped by interceptors",token);
    config.headers.authorization=`Bearer ${token}`;
    return config
 },
 function (error) {
    // Do something with request error
    return Promise.reject(error);
  })


  // Add a response interceptor
  axiossecure.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },async  (error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status=error.response.status;
    console.log("Status Error in Interceptor",status);
    if(status===401 || status===403){
        await signOutUser()
        navigate('/login')
    }
    return Promise.reject(error);
  });
 return axiossecure;
}