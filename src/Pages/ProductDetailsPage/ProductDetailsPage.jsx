import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../Hooks/useProducts'
import { Title } from '../../Component/SectionTitle/Title'
import Swal from 'sweetalert2'



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
   const handleCart = () => {
  Swal.fire({
    title: "Success!",
    draggable:true,
    text: "Product Added To the Cart",
    icon: "success",
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
    },
    buttonsStyling: false,
  });
};

const handleWishList = () => {
  Swal.fire({
    title: "Success!",
    text: "Product Added To the Wishlist",
    icon: "success",
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
    },
    buttonsStyling: false,
  });
};
  return (
    <div className='py-16 container mx-auto'>
  <div>
    <Title heading={"Shop"}>
        
    </Title>

    <section className='grid md:grid-cols-2 px-2'>
        <div className='border md:h-[500px] flex justify-center' >
            <img src={image}
            className='object-contain'
            alt="productDetails" />
   
        </div>
        <div className=' flex flex-col 
        justify-center space-y-4 p-6'>
  <h1 className='text-4xl font-bold'>{name}</h1>
  <p className='text-gray-700'>{description}</p>
  <p className=' font-semibold text-xl'>Price: ${price}</p>
  <p className='text-sm  '>Category: {category}</p>

  <div>
    <h2 className='font-semibold text-xl'>Additional Information:</h2>
    <p>Material: {material}</p>
    <p>Features: {features}</p>
  </div>

  <div>
    <h2 className='font-semibold text-xl'>Shipping:</h2>
    <p>Delivery Time: {delivery_time}</p>
    <p>Shipping Fee: {shipping_fee}</p>
  </div>
  <div className='space-x-2'>
    <button onClick={handleCart} className="btn bg-green-500">Add To Cart</button>
    <button onClick={handleWishList} className="btn btn-outline hover:bg-green-400">WishList</button>
  </div>

  {reviews?.length > 0 && (
    <div>
      <h2 className='font-semibold'>Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index} className='border-t pt-2'>
          <p>⭐ {review.rating}</p>
          <p className='italic text-sm '>{review.comment}</p>
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
