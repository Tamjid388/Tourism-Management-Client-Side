import React from 'react'
import { Title } from '../../../Component/SectionTitle/Title'
import {
    EmailShareButton,
    FacebookShareButton,
    
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    
  } from "react-share";

export const TouristStory = () => {
  return (
    <div className='container mx-auto'>
        <Title 
        heading="Discover Memorable Journeys"
        subheading="Share your own experiences."
        
        ></Title>
        <section className="bg-yellow-200 my-16">
            <FacebookShareButton url={''}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>

        </section>
    </div>
  )
}
// Assignment 12, Tourist Story Section