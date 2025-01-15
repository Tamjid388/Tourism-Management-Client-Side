import img1 from "../../assets/Banner/banner2.jpg"
import { Title } from "../../Component/SectionTitle/Title"
import { AboutTour } from "./AboutTour/AboutTour"
import { Thumbnail } from "./Thumnail/Thumbnail"

export const PackageDetails = () => {
  return (
    <div className="pt-16">
      <Title
      subheading={"Scenes from the Heartland of Bangladesh"}
      heading={"Travel Memories"}
      ></Title>
        <Thumbnail></Thumbnail>
        <AboutTour></AboutTour>
        
    </div>
  )
}
