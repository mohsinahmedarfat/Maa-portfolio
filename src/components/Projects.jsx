import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap gap-10 lg:justify-center">
            {/* thumbnail */}
            <motion.div 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-full lg:w-1/4">
            {/* MODIFY: do vertically center the image */}
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            {/* project details */}
            <motion.div 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4 text-start">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded Obg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
              <div className="flex gap-2 px-2 py-4 ">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2 text-neutral-400 "
                >
                  <FaArrowUpRightFromSquare />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
