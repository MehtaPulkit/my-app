import React from "react";
import AutoplayCarousel from "../utils/AutoPlayCarousel";
import { iconDetails } from "../config/skill-card";

const Skills = () => {
  return (
    <section id="skills" className="mb-10">
      <h2 className="font-bold">Technical Skills</h2>
      <AutoplayCarousel iconDetails={iconDetails} />
    </section>
  );
};

export default Skills;
