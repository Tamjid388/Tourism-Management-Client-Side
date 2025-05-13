import React from 'react'

export const TermsAndCondition = () => {
  return (
    <div className='container mx-auto py-16 px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4 text-center mt-4'>Terms and Conditions</h1>
      <p className='text-sm text-gray-500 text-center mb-8'>Last Updated: May 13, 2025</p>

      <div className='space-y-6 text-gray-800 leading-relaxed'>
        <section>
          <h2 className='text-2xl  font-semibold mb-2'>1. Introduction</h2>
          <p>
            Welcome to Tripnest. These Terms and Conditions govern your use of our website, services, and mobile applications (collectively, the "Services"). 
            By accessing or using our Services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
            you may not access or use our Services.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>2. Use of Services</h2>
          <p>
            Our Services are intended to provide information and resources for travelers interested in exploring Bangladesh. You are granted a limited, 
            non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes.
          </p>
          <ul className='list-disc ml-6 mt-2'>
            <li>Use our Services for any illegal purposes</li>
            <li>Copy, modify, or distribute content without prior written consent</li>
            <li>Attempt unauthorized access to any portion of our Services</li>
            <li>Interfere with the proper functioning of our Services</li>
            <li>Use automated systems or software to extract data</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>3. User Accounts</h2>
          <p>
            Some features may require you to create an account. You must provide accurate information and are responsible for maintaining 
            confidentiality of your credentials. Notify us immediately of unauthorized use. We are not liable for loss due to non-compliance.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>4. Bookings and Services</h2>
          <p>
            When you book tours or services through Tripnest, you are entering into an agreement with the service provider, not Tripnest. 
            We act only as an intermediary. Please review the service provider’s terms before booking.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>5. Intellectual Property</h2>
          <p>
            All content provided through our Services is the property of Tripnest or its content suppliers, and is protected by international copyright laws.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>6. Limitation of Liability</h2>
          <p>
            Tripnest shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Services.
            We do not guarantee the accuracy of any content, and you use it at your own risk.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>7. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Tripnest and its team from any claims, damages, or costs resulting from your violation of these terms.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Continued use after changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of Bangladesh. Disputes shall be resolved in the courts of Dhaka, Bangladesh.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>10. Contact Information</h2>
          <p>
            For any questions regarding these Terms and Conditions, please contact us at <a className="text-blue-600 underline" href="mailto:legal@tripnest.com">legal@tripnest.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
