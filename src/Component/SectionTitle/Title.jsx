

export const Title = ({heading,subheading}) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-12">
       <p className="text-xl text-green-700  mb-6 "
       >{subheading}</p>
       <h3 
       className="text-3xl font-bold uppercase border-y-4 py-4">{heading}</h3>
  
      </div>
  )
}
