import { useContext } from "react"
import { Authcontext } from "../Provider/Authprovider"
import { Navigate, useLocation } from "react-router-dom"
import { Loading } from "../Component/LoadingSpinner/Loading"


export const Privateroute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(Authcontext)
    console.log(user,loading);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
 
}
