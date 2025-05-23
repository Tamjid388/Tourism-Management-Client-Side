import React from 'react'
import { Banner } from './Banner/Banner'
import { Overview } from './Overview/Overview'
import { TouristStory } from './TouristStory/TouristStory'
import { Explore } from './ExploringActivities/Explore'
import { FAQ } from './FAQ/FAQ'
import { MainTab } from './Tabs/MainTab'
import { Makingadventure } from './MakingAdventure/Makingadventure'
import { Framertutorial } from './FramerTutorial/framertutorial'
import { Helmet } from 'react-helmet-async'
import { Products } from './Products/Products'

export const Home = () => {
  return (
    <div>

       <Helmet>
       <title>Home | TripNest</title>
       </Helmet>
        <Banner></Banner>
        <Overview></Overview>
        <MainTab></MainTab>
        <TouristStory></TouristStory>
        <Products></Products>
        <Makingadventure></Makingadventure>
        {/* <Framertutorial></Framertutorial> */}
        <Explore></Explore>
        <FAQ></FAQ>
    </div>
  )
}
