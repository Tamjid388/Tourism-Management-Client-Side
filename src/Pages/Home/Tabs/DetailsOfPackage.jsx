import { useParams } from "react-router-dom"
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"


export const DetailsOfPackage = () => {
  const {id}=useParams()
  const axiosSecure=useAxiosSecure()
    const { isPending, data: pack } = useQuery({
        queryKey:['packagedetail'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/packages/${id}`); 
          return res.data;
        },
      
        
      })
      if(isPending){
        return <h1>Loading.....</h1>
      }
  return (
    <div className='py-16 container mx-auto px-2'>
     <h1 
     className="text-3xl font-bold font-mansalva text-center py-8">
      Discover the Adventure: Your Perfect Package Awaits!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div className="">
        <img className='md:h-[600px] object-cover'
                    src={pack?.imageUrl}
                    alt="pack" />
        </div>


        <div className="flex flex-col  justify-center gap-4">
        <h2 className="text-4xl font-bold">{pack?.packageName}</h2>
        <p className="text-3xl">{pack?.packageDetails}</p>
       <div>
       <p className="text-3xl btn btn-outline">{pack?.days} Days</p>
       </div>

        </div>
      </div>
    </div>
  )
}
