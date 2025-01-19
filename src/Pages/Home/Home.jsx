import React from 'react'
import { Banner } from './Banner/Banner'
import { Overview } from './Overview/Overview'
import { TouristStory } from './TouristStory/TouristStory'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Overview></Overview>
        <TouristStory></TouristStory>
    </div>
  )
}
