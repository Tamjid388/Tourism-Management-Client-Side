import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { useAxiosPublic } from '../../../../Hooks/useAxiosPublic';
import { Authcontext } from '../../../../Provider/Authprovider';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";


export const Rechart = () => {
    const {user}=useContext(Authcontext)
      // console.log(user);
      const axiosPublic=useAxiosPublic()
    const { isPending, data:mybookings=[] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => { 
          const response = await axiosPublic.get(`/bookings?email=${user.email}`);
           
          return response.data;
          
        },
      })
      console.log(mybookings);
       // Prepare data for charts
  const costData = mybookings.map((booking) => ({
    name: booking.data.name,
    price: parseInt(booking.data.price, 10),
  }));

  const guideData = Object.values(
    mybookings.reduce((acc, booking) => {
      const guide = booking.data.guideName;
      acc[guide] = acc[guide] || { name: guide, count: 0 };
      acc[guide].count++;
      return acc;
    }, {})
  );

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {/* Booking Cost Breakdown */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Booking Cost Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={costData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tour Guide Distribution */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold  mb-4">Tour Guide Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={guideData} dataKey="count" nameKey="name" outerRadius={100}>
              {guideData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
