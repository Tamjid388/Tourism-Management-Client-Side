
import { Link } from "react-router-dom"
import banner2 from "../../../assets/Banner/scenario.webp"

export const Banner = () => {
  const banner="https://res.cloudinary.com/dto6ulc5n/image/upload/v1746690299/scenarioMain_z6dhtd.jpg"
  return (
    <div>
      <div className="relative ">
      <img
        className="w-full h-screen object-cover"
        src={banner} loading="eager" alt="banner" />
        <div className="absolute  bg-black/20 inset-0"></div>
       
        <div 
        className="space-y-6 absolute inset-0 flex flex-col
         text-center items-center justify-center">
        <h1 className="font-lato text-4xl md:text-8xl
         text-white font-bold mb-4 opacity-90">
      Welcome to The Tourist Guide
    </h1>
    <p className="font-lato text-lg md:text-4xl text-white font-bold opacity-90">
      Explore the beauty and culture of Bangladesh.
    </p>
    <Link to={'/alltrips'}>
    <button className="btn rounded-none font-lato">
        View Adventures
    </button>
    </Link>

        </div>

      </div>
    </div>
  )
}
