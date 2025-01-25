import React from 'react'
import { Banner } from './Banner/Banner'
import { Overview } from './Overview/Overview'
import { TouristStory } from './TouristStory/TouristStory'
import { Explore } from './ExploringActivities/Explore'
import { FAQ } from './FAQ/FAQ'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Overview></Overview>
        <TouristStory></TouristStory>
        <Explore></Explore>
        <FAQ></FAQ>
    </div>
  )
}
