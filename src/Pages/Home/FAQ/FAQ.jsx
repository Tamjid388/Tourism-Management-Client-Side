import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'

export const FAQ = () => {
  return (
    <div className='container mx-auto my-12'>
       <div className='pt-4'>
       <Title  heading={"Frequently Asked question"}></Title>
       </div>
        <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Do I need to create an account to book?</div>
    <div className="collapse-content">
      <p> Yes, creating an account helps us keep track of your bookings and provides you with the best experience.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">What does "In Review" mean?</div>
    <div className="collapse-content">
      <p>This status means your booking is being reviewed by our team. You’ll be notified once it’s approved or rejected.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
    <div className="collapse-content">
      <p>We accept major credit cards, debit cards, and secure payment gateways like Stripe for a smooth and secure transaction process</p>
    </div>
  </div>
</div>
    </div>
  )
}
