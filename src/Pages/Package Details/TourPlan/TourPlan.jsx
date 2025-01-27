import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'

export const TourPlan = () => {
  return (
    <div className='container mx-auto'>
        <Title heading={'Tour Plan'}>

        </Title>

        <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="tour-plan" defaultChecked />
  <div className="collapse-title text-xl font-medium">Day 1: Arrival & City Tour</div>
  <div className="collapse-content">
    <p>Welcome to the city! On Day 1, you'll be greeted at the airport and transferred to your hotel. After check-in and some rest, enjoy a guided city tour covering major landmarks, local markets, and cultural hotspots.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="tour-plan" />
  <div className="collapse-title text-xl font-medium">Day 2: Adventure & Nature</div>
  <div className="collapse-content">
    <p>Start your day with an adventurous trek to the nearby mountains. Enjoy breathtaking views and lush greenery. Later, visit a serene lake for boating and enjoy a picnic lunch amidst nature.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="tour-plan" />
  <div className="collapse-title text-xl font-medium">Day 3: Historical Exploration</div>
  <div className="collapse-content">
    <p>Day 3 is dedicated to exploring historical landmarks, including ancient forts, museums, and heritage sites. Learn about the rich history and culture of the region from your guide.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="tour-plan" />
  <div className="collapse-title text-xl font-medium">Day 4: Leisure & Departure</div>
  <div className="collapse-content">
    <p>Spend the morning at your leisure—shop for souvenirs, relax at the spa, or explore nearby attractions. In the afternoon, you'll be transferred to the airport for your departure. Safe travels!</p>
  </div>
</div>


    </div>
  )
}
