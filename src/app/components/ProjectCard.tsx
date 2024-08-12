import React from "react"

interface ProjectCardProps {
  imageSrc1: string
  imageSrc2: string
  category: string
  title: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc1,
  imageSrc2,
  category,
  title,
}) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-[#FFEBDB] flex flex-row px-8 rounded-lg">
        <img
          src={imageSrc1}
          alt={`${title} - Background`}
          className=" w-[50%] h-60 z-20 shadow-md"
        />
        <img
          src={imageSrc2}
          alt={`${title} - Foreground`}
          className="w-32 h-32 rounded-md shadow-md "
        />
      </div>
      <div className="mt-4">
        <span className="text-[#FD6F00] text-sm">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
      </div>
    </div>
  )
}

export default ProjectCard
