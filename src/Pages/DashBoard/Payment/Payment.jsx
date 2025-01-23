import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { CheckoutForm } from "./CheckoutForm"
import { Title } from "../../../Component/SectionTitle/Title"



const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)


export const Payment = () => {
   
  return (
    <div>

  <Title heading={'Payment'} ></Title>
       <div className="bg-gray-200 w-1/2 mx-auto p-6 rounded-md shadow-lg">
       <Elements stripe={stripePromise}>
              <CheckoutForm>

              </CheckoutForm>
        </Elements>
       </div>
    </div>
  )
}
