import React from "react";
import Title from "../../ui/Title";

const Experience = () => {
  const experience = [
    {
      company: "BPM-D",
      position: "Software Developer",
      place: 'Toronto',
      startDate: "April 2021",
      endDate: "Current",
    },
    {
      company: "BPM-D",
      position: "Solution Developer",
      place: 'Mumbai',
      startDate: "Mar 2019",
      endDate: "Nov 2019",
    },
    {
      company: "BPM-D",
      position: "Associate Solution Developer",
      place: 'Mumbai',
      startDate: "Feb 2019",
      endDate: "May 2017",
    },
  ];
  return (
    <div className="py-10 md:px-32 px-5 bg-white" >
        <Title label="Experience" isCentered={true} />
        <div className="flex gap-x-2 flex-row">
          {experience.map((exp) => (
            <div className="w-full bg-gray-50 p-3">
              <p className="font-medium">{exp.position}</p>
              <p>{exp.place}</p>
              <p>{exp.company}</p>
              <p>{exp.startDate} to {exp.endDate}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Experience;
