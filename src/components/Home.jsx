import { educationData, workData } from "../config/boxData";
import About from "./About";
import Infobox from "./Infobox";
import Leadership from "./Leadership";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <div>
      <About />
      <TechStack />
      <Infobox
        id={workData.id}
        title={workData.title}
        titleImg={workData.titleImg}
        items={workData.items}
        details={workData.details}
      />
      <Leadership />

      <Infobox
        id={educationData.id}
        items={educationData.items}
        title={educationData.title}
        titleImg={educationData.titleImg}
      />
    </div>
  );
};

export default Home;
