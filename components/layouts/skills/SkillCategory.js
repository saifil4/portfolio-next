import React from "react";
import SkillItem from "./SkillItem";
import { SiMaterialdesign } from "react-icons/si";

const SkillCategory = ({ icon: Icon, title, skills }) => {
  return (
    <div className="w-full border-r">
     
      <div className="text-5xl flex justify-center">
        <SiMaterialdesign />
      </div>

      <h1 className="text-center py-5 font-header font-bold text-2xl">
        {title}
      </h1>

      <p className="text-theme-blue font-medium text-center">Languages</p>
      <ul className="text-center">
        {skills &&
          skills.map((skillItem) => <SkillItem skillItem={skillItem} />)}
      </ul>
    </div>
  );
};

export default SkillCategory;
