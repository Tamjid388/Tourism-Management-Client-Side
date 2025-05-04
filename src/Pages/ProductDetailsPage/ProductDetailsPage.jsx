import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Hooks/useProducts'
import { Title } from '../../Component/SectionTitle/Title'



export const ProductDetailsPage = () => {
    const { products}=useProducts()
    const {id}=useParams()

    

    const product = products.find((prod) => prod.id == id);
    if (!product) {
        return <div>Loading or product not found</div>;
      }
      
  
    const {
        name,
        description,
        price,
        image,
        category,
        additional_information: { material, features },
        shipping: { delivery_time, shipping_fee },
        reviews
      } = product;
      
  return (
    <div className='py-16 container mx-auto'>
  <div>
    <Title heading={"Shop"}>
        
    </Title>

    <section className='grid md:grid-cols-2 px-2'>
        <div className='border bg-white'>
            <img src={image} alt="" />
   
        </div>
        <div className=' flex flex-col 
        justify-center space-y-4 p-6'>
  <h1 className='text-3xl font-bold'>{name}</h1>
  <p className='text-gray-700'>{description}</p>
  <p className='text-lg font-semibold'>Price: ${price}</p>
  <p className='text-sm text-gray-600 '>Category: {category}</p>

  <div>
    <h2 className='font-semibold'>Additional Information:</h2>
    <p>Material: {material}</p>
    <p>Features: {features}</p>
  </div>

  <div>
    <h2 className='font-semibold'>Shipping:</h2>
    <p>Delivery Time: {delivery_time}</p>
    <p>Shipping Fee: {shipping_fee}</p>
  </div>

  {reviews?.length > 0 && (
    <div>
      <h2 className='font-semibold'>Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index} className='border-t pt-2'>
          <p>⭐ {review.rating}</p>
          <p className='italic text-sm text-gray-600'>{review.comment}</p>
        </div>
      ))}
    </div>
  )}
</div>

    </section>
  </div>
    </div>
  )
}
