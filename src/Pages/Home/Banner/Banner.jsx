import banner from "../../../assets/Banner/banner2.jpg"

export const Banner = () => {
  return (
    <div>
      <div className="relative ">
      <img
        className="w-full h-screen object-cover"
        src={banner} alt="" />
        <div className="absolute bg-black/50 inset-0"></div>
       
        <div 
        className="space-y-6 absolute inset-0 flex flex-col text-center items-center justify-center">
        <h1 className="font-mansalva text-4xl md:text-8xl text-white font-bold mb-4 opacity-90">
      Welcome to The Tourist Guide
    </h1>
    <p className="font-mansalva text-lg md:text-4xl text-white font-bold opacity-90">
      Explore the beauty and culture of Bangladesh.
    </p>
    <button className="btn rounded-none font-lato">
        View Adventures
    </button>

        </div>

      </div>
    </div>
  )
}
