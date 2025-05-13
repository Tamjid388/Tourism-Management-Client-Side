import React from 'react'

export const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto py-16 px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Privacy Policy</h1>
      <p className='text-sm text-gray-500 text-center mb-8'>Last Updated: May 13, 2025</p>

      <div className='space-y-6 text-gray-800 leading-relaxed'>
        <section>
          <h2 className='text-2xl font-semibold mb-2'>1. Introduction</h2>
          <p>
            At Tripnest, we value your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our Services.
            By using our Services, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className='list-disc ml-6 mt-2'>
            <li>Personal Information (e.g., name, email address, phone number)</li>
            <li>Account credentials if you register</li>
            <li>Booking details and preferences</li>
            <li>Usage data (e.g., browser type, device type, IP address)</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className='list-disc ml-6 mt-2'>
            <li>Provide and improve our services</li>
            <li>Process bookings and transactions</li>
            <li>Communicate with you about your account or services</li>
            <li>Send promotional messages with your consent</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share it with:
          </p>
          <ul className='list-disc ml-6 mt-2'>
            <li>Service providers to fulfill your bookings</li>
            <li>Law enforcement if required by law</li>
            <li>Third parties with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal data. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className='list-disc ml-6 mt-2'>
            <li>Access, correct, or delete your personal information</li>
            <li>Withdraw your consent at any time</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>8. Children’s Privacy</h2>
          <p>
            Our Services are not intended for children under 13. We do not knowingly collect personal data from children without parental consent.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We encourage you to review it regularly. Continued use of our Services constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us at{' '}
            <a className="text-blue-600 underline" href="mailto:privacy@tripnest.com">
              privacy@tripnest.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
