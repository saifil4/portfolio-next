import React, { FunctionComponent } from "react";
import Project from "./ProjectItem";
import { ProjectType } from "../../../types/project";
import { motion, Variants } from "framer-motion";

const squareVariants: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
  hidden: {
    y: 300,
  },
};

const projects: Array<ProjectType> = [
  {
    name: "Agile Board",
    image: "images/agile-board/poster-image.svg",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio Website",
    image: "images/portfolio/poster-image.svg",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Covid Tracker",
    image: "images/covid-tracker/poster-image.svg",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Lines and Boxes",
    image: "images/covid-tracker/poster-image.svg",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const Work: FunctionComponent = () => {

  return (
    <div className="py-10 md:px-32 flex flex-col px-5 justify-center">
      <h1 className="text-4xl mb-5 text-black font-header font-bold text-center">
        Personal Projects
      </h1>

      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 w-3/4 md:grid-cols-2 self-center"
      >
        {projects.map((project: ProjectType) => (
          <motion.div variants={squareVariants}>
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
