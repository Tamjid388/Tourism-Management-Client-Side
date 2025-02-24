import React from 'react'
import { Banner } from './Banner/Banner'
import { Overview } from './Overview/Overview'
import { TouristStory } from './TouristStory/TouristStory'
import { Explore } from './ExploringActivities/Explore'
import { FAQ } from './FAQ/FAQ'
import { MainTab } from './Tabs/MainTab'
import { Makingadventure } from './MakingAdventure/Makingadventure'
import { Framertutorial } from './FramerTutorial/framertutorial'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Overview></Overview>
        <MainTab></MainTab>
        <TouristStory></TouristStory>
        <Makingadventure></Makingadventure>
        {/* <Framertutorial></Framertutorial> */}
        <Explore></Explore>
        <FAQ></FAQ>
    </div>
  )
}
