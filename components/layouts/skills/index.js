import React from "react";
import SkillCategory from "./SkillCategory";
import SiMaterialdesign from 'react-icons/si';

function Skills() {
  const skills = [
    "React",
    "Angular",
    "CSS",
    "HTML",
    "JavaScript",
    "SQL",
    "Node JS",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const skillList = [
    {
      icon: SiMaterialdesign,
      title: "Design",
      skills: ["Adobe XD", "Figma", "Wireframing", "React", "Prototyping"],
    },
    {
      icon: SiMaterialdesign,
      title: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "React", "React"],
    },
    {
      icon: SiMaterialdesign,
      title: "Back-end",
      skills: ["Node JS", "Express", "MySQL", "React", "React", "React", "React"],
    },
  ];

  return (
    <div className="py-10 md:px-32 px-5 bg-theme-blue">
      <div className="flex flex-row gap-x-2 bg-white py-10 rounded-lg drop-shadow-md">
        {skillList.map((skillCategory) => (
          <SkillCategory {...skillCategory} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
