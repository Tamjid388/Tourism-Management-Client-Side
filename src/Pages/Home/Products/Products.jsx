import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'
import { Link } from 'react-router-dom'

export const Products = () => {
    const {isLoading, isError, data:products=[], error}=useQuery(
        {
            queryKey:["AdventureProducts"],
            queryFn:async()=>{
                const response=await axios.get('/products.json')
               
                return response.data
            }
        }
    )
const topProducts=products.slice(0,4)


  return (
    <div className='container mx-auto px-2  my-16'>
 <Title 
        heading="Explore Essential Gear"
        subheading="Shop Top-rated products for your next adventure"
        
        ></Title>

        <div className='grid grid-cols-1  md:grid-cols-4 gap-8'>
            {
                topProducts.map((product)=>
                <div key={product.id}
                 className="card bg-base-100  shadow-xl border">
                    <figure className=" ">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-xl h-[250px] object-contain object-center" />
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
        <div className='flex justify-center mt-6 '>
            <Link >
            <button className='btn rounded-none
             bg-green-100 btn-outline border-green-400'>Browse All Accessories</button>
            </Link>
        </div>
    </div>
  )
}
