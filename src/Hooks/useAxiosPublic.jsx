import axios from "axios"




export const axiosPublic=axios.create(
    {
         baseURL:'https://tourism-management-server-side-olive.vercel.app/'
    }
)

export const useAxiosPublic = () => {
  return axiosPublic
}
