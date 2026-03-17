import { iconDetails } from "../config/skill-card";
import AutoplayCarousel from "../utils/AutoPlayCarousel";

const Skills = () => {
  return (
    <section id="skills" className="mb-10">
      {/* <h2 className="font-bold">Technologies</h2> */}
      <AutoplayCarousel iconDetails={iconDetails} />
    </section>
  );
};

export default Skills;
