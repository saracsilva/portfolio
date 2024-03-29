import React, { useEffect } from "react";
import DivisionBar from "../../components/DivisionBar";
import { motion } from "framer-motion";

import { Link as LinkR, useLocation } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("").toLowerCase();

  return (
    <LinkR to={`/${projectTitle}`}>
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{subtitle}</p>
        </div>
        <img
          src={`./assets/${projectTitle}.png`}
          alt={projectTitle}
          width="400"
          height="370"
          className="w-[400px] h-[370px] object-cover"
        />
      </motion.div>
    </LinkR>
  );
};

function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">PROJECTS</p>
          <div className="flex justify-center mt-5">
            <DivisionBar width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here you are going to find some of my projects from my Ironhack
          Bootcamp and also some of my animations.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-light-pink
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-purple"
          >
            PERSONAL PROJECTS
          </div>
          <Project
            title="My Dictionary"
            subtitle="A personal project, an English Dictionary."
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-light-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-purple"
          >
            IRONHACK'S PROJECTS
          </div>
          {/* ROW 2 */}
          <Project
            title="Upmanager"
            subtitle="A managment App made as a final project from the Bootcamp."
          />
          <Project
            title="Could Be Pizza"
            subtitle="An APP to find all crazy kinds of pizza flavors made as a second project from the Bootcamp."
          />

          <Project
            title="Dinocorn Game"
            subtitle="The first project of the Bootcamp wich we had to make a game in JavaScript."
          />
          {/* ROW 3 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-deep-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MOTION DESIGN
          </div>
          <Project title="Motion Reels" />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
