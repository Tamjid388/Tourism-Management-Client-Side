import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "../../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { Authcontext } from "../../../../Provider/Authprovider";
import moment from "moment";
import { Link } from "react-router-dom";


export const MyBookings = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useContext(Authcontext)

    const { isPending, error, data:mybookings=[] } = useQuery({
      queryKey: ['bookings'],
      queryFn: async () => { 
        const response = await axiosPublic.get(`/bookings?email=${user.email}`);
        console.log(response.data); 
        return response.data;
        
      },
    })
    if(isPending){
      return <h1>Loading....</h1>
    }
 

  return (
    <div>
        <h1 className="text-4xl font-bold">My Bookings {mybookings.length}</h1>
        {
           mybookings.length === 0 && <h1 className="text-3xl font-semibold text-red-500 my-8">You don't have any bookings yet. 
                Explore our available options and make your first booking today!</h1>
        }
        {
            mybookings.length>0 && 
            
            (
                <div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                            <th>SL</th>
                          <th>Tourist Name</th>
                          <th>Guide Name</th>
                          <th>Tour Details</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
 
  {mybookings.map((booking, index) => {
    
    let formattedDate = moment(booking.data.date).format('MMMM Do YYYY');
    
    return (
      <tr key={booking._id}>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={booking.data.url} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{booking.data.name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {booking.data.guideName || 'Not Available'}
        </td>
        <td>
            <h1 className="font-semibold">{booking.data.packageName}</h1>
            <h1 className="font-semibold">{formattedDate }</h1>
            <p className="font-semibold">{booking.data.price} USD</p>
        </td>
        <th className="space-x-1">
        <button  className="btn text-green-500 bg-green-200 btn-ghost btn-xs">{booking.status}</button>
          <Link to={'/dashboard/paymentroute'} 
         state={{ totalPrice:booking.data.price, bookingId: booking._id}}
         >
            <button disabled={!mybookings.length}  className="btn btn-ghost btn-outline btn-xs">
            Pay
            </button>
           </Link>
          <button className="btn btn-ghost btn-outline btn-xs">Cancel</button>
        </th>
      </tr>
    );
  })}
</tbody>

                    </table>
                  </div>
                </div>
              )
        }
    </div>
  )
}
