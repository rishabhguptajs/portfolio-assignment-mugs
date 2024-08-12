import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Custom UI Design",
    category: "UI/UX",
    imageSrc1: "https://cdn.dribbble.com/userupload/5892787/file/original-34729e2a8a37578f3de699c11e458424.png?resize=1504x1128",
    imageSrc2: "https://cdn.dribbble.com/userupload/5892787/file/original-34729e2a8a37578f3de699c11e458424.png?resize=1504x1128",
  },
  {
    id: 2,
    title: "AirCalling Landing Page Design",
    category: "Web Design",
    imageSrc1:
      "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
    imageSrc2:
      "https://s3-alpha-sig.figma.com/img/35f5/4291/466e1911ebe5383b65f5e9a7095f7e2c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPyq4z-AI2oEhx1uYNkgj0kZelOXlwtaaBq5HYXXEcB7fugcsFVWlsCkJJcR6FXbBVQLOyRh0c8iw-l-gI37153SR5zYou3jw-lwW-8Tfu6L-zVXeuHlbbnNAiAap1ylcAlXmVa1~i9NnbzQoykJDxGuSkUeHzJQOHmU5-Apicl3TfavyGfX~n-PrqUNyDQWltiMoilfMs6AHIxwKDxPIUedBixUmyz9cDJLe5rd~DK8LtZCXSKWhlwDBXLNahh0jkx2jTzWFOwAtf2bt3G9IRxkyqtpYwFVBgerPCQMKbO3c0tXLzjoauMIKUDnrNoyPuIxb5VU1Tk1ugVNTTmu1w__",
  },
  {
    id: 3,
    title: "Business Landing Page Design",
    category: "Web Design",
    imageSrc1: "https://s3-alpha-sig.figma.com/img/99ad/9ecd/c7e4761db8fcbee96701dabc95083a4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw7ieWqQZSAPwHshvhzpMCKwRcwc99wYUq6HAHak-gmlSFYopBtihqFUpFAhU5SIedCd4dY~blVQPYTJBt-3uF8wHYZYuteqkMNwTP6WdqJmtguNaApzAcnQnWD~Il0iKk1CwNbrKCXI1ofSv7hVuks5SkOu6kuSgCxtJ4xA~WVko9McwSPOBao4sL9NOXOkvyt6aNjGacgxRaH5pI8KdG4TI5JFMXf1G0PMvy52dLcvR1MZJEKJTIQS4XwJ0SJ5AIWHBzW41QzbseuyUmvcnM6x4u8olJKVp6NPi9mELeNm8frmbSA7g0TZKBoM9BEyfUl3SL5r0Vfa~QRXqrpsZg__",
    imageSrc2: "https://s3-alpha-sig.figma.com/img/99ad/9ecd/c7e4761db8fcbee96701dabc95083a4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw7ieWqQZSAPwHshvhzpMCKwRcwc99wYUq6HAHak-gmlSFYopBtihqFUpFAhU5SIedCd4dY~blVQPYTJBt-3uF8wHYZYuteqkMNwTP6WdqJmtguNaApzAcnQnWD~Il0iKk1CwNbrKCXI1ofSv7hVuks5SkOu6kuSgCxtJ4xA~WVko9McwSPOBao4sL9NOXOkvyt6aNjGacgxRaH5pI8KdG4TI5JFMXf1G0PMvy52dLcvR1MZJEKJTIQS4XwJ0SJ5AIWHBzW41QzbseuyUmvcnM6x4u8olJKVp6NPi9mELeNm8frmbSA7g0TZKBoM9BEyfUl3SL5r0Vfa~QRXqrpsZg__"
  },
  {
    id: 4,
    title: "Ecom Web Page Design",
    category: "Web Design",
    imageSrc1: "https://s3-alpha-sig.figma.com/img/08a3/15aa/af2fb38ce2fa59072d26b09da15537ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKlFPgdd3SOC8y08OOnU3NPsdF4uwBJQB~KdJGMZCobuHp-dLU-BJ66juDafoSTHn~65UwtGRJiybl5lSvRBx6UKV6ISq6mY8D48baphIaGQAw9I3X788Yw0kuV5~JhnpMhYb-HyoEpOOWkbaJRXQS3fUXzKzkGuq19ovXaK-2uECYOIBl2RFq6KyCGPhYjJ9VVPAAQYu4VfVFCRn9ahmHai1r8lJq6ESj~wq33m05nb3kyp~nu9g0nCm-0lLS8ousgqL~ejYCVG-KEwoOlvGg2aCYBi~17lcvd2JbuN11RSEtgNmTWKYLX9uVS5b3yemPxTyMV6sXMe6RnwyZiUtw__",
    imageSrc2: "https://s3-alpha-sig.figma.com/img/08a3/15aa/af2fb38ce2fa59072d26b09da15537ed?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKlFPgdd3SOC8y08OOnU3NPsdF4uwBJQB~KdJGMZCobuHp-dLU-BJ66juDafoSTHn~65UwtGRJiybl5lSvRBx6UKV6ISq6mY8D48baphIaGQAw9I3X788Yw0kuV5~JhnpMhYb-HyoEpOOWkbaJRXQS3fUXzKzkGuq19ovXaK-2uECYOIBl2RFq6KyCGPhYjJ9VVPAAQYu4VfVFCRn9ahmHai1r8lJq6ESj~wq33m05nb3kyp~nu9g0nCm-0lLS8ousgqL~ejYCVG-KEwoOlvGg2aCYBi~17lcvd2JbuN11RSEtgNmTWKYLX9uVS5b3yemPxTyMV6sXMe6RnwyZiUtw__"
  },
  {
    id: 5,
    title: 'Travel Stacks',
    category: 'App Design',
    imageSrc1: "https://cdn.dribbble.com/userupload/14920979/file/original-89136ceb867ea5b70115690a3e2713a5.png?resize=1504x1128",
    imageSrc2: "https://cdn.dribbble.com/userupload/14920979/file/original-89136ceb867ea5b70115690a3e2713a5.png?resize=1504x1128",
  },
  {
    id: 6,
    title: "Home Care",
    category: "App Design",
    imageSrc1: "https://cdn.dribbble.com/userupload/9958688/file/original-d0c9057007a8f1a1a9b7b1f8138ef0eb.png?resize=1504x1128",
    imageSrc2: "https://cdn.dribbble.com/userupload/9958688/file/original-d0c9057007a8f1a1a9b7b1f8138ef0eb.png?resize=1504x1128",
  },
  {
    id: 7,
    title: "Custom Illustration",
    category: "Graphic Design",
    imageSrc1: "https://cdn.dribbble.com/users/2106607/screenshots/5945407/media/dc55bdca563e17054a4ba4d35ba11ed1.jpg?resize=800x600&vertical=center",
    imageSrc2: "https://cdn.dribbble.com/users/2106607/screenshots/5945407/media/dc55bdca563e17054a4ba4d35ba11ed1.jpg?resize=800x600&vertical=center",
  }
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
    <div id="projects" className="px-4 py-16 bg-white mx-auto max-w-screen-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 font-poppins text-center">
        My Projects
      </h1>
      <p className="text-gray-800 mb-8 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla nec interdum scelerisque, urna ante consectetur felis,
        a faucibus felis quam ut turpis.
      </p>

      <div className="flex justify-center space-x-4 mb-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
