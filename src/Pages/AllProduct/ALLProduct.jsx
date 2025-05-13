import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Loading } from '../../Component/LoadingSpinner/Loading'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const ALLProduct = () => {
const banner="https://res.cloudinary.com/dto6ulc5n/image/upload/v1747157820/shop_l9ahcw.webp"
  
   const {isLoading, isError, data:products=[], error}=useQuery(
        {
            queryKey:["AllProducts"],
            queryFn:async()=>{
                const response=await axios.get('/products.json')
               
                return response.data
            }
        }
    )
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(products);
return (
    <div
    className='container mx-auto py-16'
    >
<div>
    <figure>
        <img src={banner} alt="" />
    </figure>
    
        <div className='grid grid-cols-1  md:grid-cols-4 gap-8 my-16'>
            {
                products.map((product)=>
                <div key={product.id}
                 className="card bg-base-100  shadow-xl border">
                    <figure className=" ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="bg-white rounded-xl h-[250px] object-contain object-center" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <p>{product.category}</p>
                      <h2 className="card-title">{product.name}</h2>
                     
                      <div className="card-actions">
                        <Link to={`/products/${product.id}`}>
                        <button className="btn rounded-none
                         bg-green-500 text-white">View Details</button>
                        </Link>
                       
                      </div>
                    </div>
                  </div>)
            }
        </div>
</div>
    </div>
  )
}
