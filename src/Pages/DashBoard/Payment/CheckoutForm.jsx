import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'

export const CheckoutForm = () => {
const stripe=useStripe();
const elements=useElements()


    const handlesubmit=async (event)=>{
       event.preventDefault();
       if(!stripe ||elements){
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
       }
       else{
        console.log("Payment Method ",paymentMethod);
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
      <button className='btn bg-green-500 my-4' type="submit" disabled={!stripe}>
        Pay
      </button>
   </form>
  )
}
