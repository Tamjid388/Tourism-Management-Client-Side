import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { Authcontext } from '../../../Provider/Authprovider';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export const CheckoutForm = () => {
const [error,setError]=useState(' ')
const [clientSecret,setClientSecret]=useState(' ')
const [transactionId,setTransactionId]=useState( ' ')
const location=useLocation()
const {user}=useContext(Authcontext)
const stripe=useStripe();
const elements=useElements()
const axiosSecure=useAxiosSecure()
const {totalPrice,bookingId}=location.state || {}
console.log(bookingId);
// const totalPrice=1200




useEffect(()=>{
  axiosSecure.post('/create-payment-intent',{price:totalPrice})
  .then(res=>{
    // console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret) 
  })
},[axiosSecure,totalPrice])


    const handlesubmit=async (event)=>{
       event.preventDefault();
       if(!stripe || !elements){
        return
       }
       const card=elements.getElement(CardElement)
       if(card===null){
        return
       }
       const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card
       })
       if(error){
        console.log("Payment Error",error);
        setError(error.message)
       }
       else{
        console.log("Payment Method ",paymentMethod);
        setError(' ')
      
       }
    //    COnfirm payment
    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || 'anonymous',
                name:user?.displayName || 'anonymous'
            }
        }
    })
       if(confirmError){
        console.log("Confirm Error");
       }else{
        console.log("Payment Intent",paymentIntent);
        if(paymentIntent.status==='succeeded'){
            console.log('transaction id',paymentIntent.id);
            setTransactionId(paymentIntent.id)
            Swal.fire({
                title: "Payment Successful!",
                text: "Thank you for your payment. Your transaction was completed successfully.",
                icon: "success",
                confirmButtonText: "OK"
              });

        // Save the Payment in datbase
        const payment={
            email:user.email,
            price:totalPrice,
            date:new Date(),
            bookingid:bookingId,
            transactionId:paymentIntent.id,
            status:'In Review'
            

        }
        const res=await axiosSecure.post('/payments',payment)
        console.log("Payment Saved",res);

    // Changing the bookig status
        const status=await axiosSecure.put('/bookings/status',{bookingId})

              
        }
       }
    }
  return (
   <form id="payment-form" onSubmit={handlesubmit}>
  <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn bg-green-500 my-8' type="submit" 
      disabled={!stripe || !clientSecret }>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {/* {
        transactionId && <p className='text-green-500'>
            Your Transaction Id: {transactionId}
        </p>
      } */}
   </form>
  )
}
