import React from "react"

interface TestimonialCardProps {
  image: string
  quote: string
  name: string
  profile: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  quote,
  name,
  profile,
}) => {
  return (
    <div className="flex mx-auto p-6 items-center justify-center align-middle border rounded-lg shadow-lg min-h-56 max-w-[80%]">
      <div className="w-1/3 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-32 w-32 object-cover rounded-full"
        />
      </div>
      <div className="w-2/3 pl-6 flex flex-col justify-center">
        <p className="text-lg italic relative">
          <span className="text-[#FD6F00] text-2xl">“</span>
          {quote}
          <span className="text-[#FD6F00] text-2xl">”</span>
        </p>
        <p className="mt-4 font-bold">{name}</p>
        <p className="text-gray-500">{profile}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
