import React, { useState } from "react";
import ProjectCard from "./ProjectCard"; // Adjust the import path as needed

const projectsData = [
  {
    id: 1,
    title: "UI/UX Project 1",
    category: "UI/UX",
    imageSrc1: "https://via.placeholder.com/400x300",
    imageSrc2: "https://via.placeholder.com/150x150",
  },
  {
    id: 2,
    title: "Web Design Project 1",
    category: "Web Design",
    imageSrc1:
      "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
    imageSrc2:
      "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
  },
  {
    id: 3,
    title: "App Design Project 1",
    category: "App Design",
    imageSrc1: "https://via.placeholder.com/400x300",
    imageSrc2: "https://via.placeholder.com/150x150",
  },
  {
    id: 4,
    title: "Graphic Design Project 1",
    category: "Graphic Design",
    imageSrc1: "https://via.placeholder.com/400x300",
    imageSrc2: "https://via.placeholder.com/150x150",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="px-4 py-16 bg-white">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 font-poppins">
        My Projects
      </h1>
      <p className="text-gray-800 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla nec interdum scelerisque, urna ante consectetur felis,
        a faucibus felis quam ut turpis.
      </p>

      <div className="flex space-x-4 mb-8">
        {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
          (category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-lg font-semibold border-[1px] border-[#545454] ${
                selectedCategory === category
                  ? "bg-[#FD6F00] text-white"
                  : "bg-[#F8F8F8] text-gray-800"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc1={project.imageSrc1}
            imageSrc2={project.imageSrc2}
            category={project.category}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
