import React from "react";

import Skills from "./Skills";
import About from "./About";
import Infobox from "./Infobox";
import { educationData, workData } from "../config/boxData";

const Home = () => {
  return (
    <div>
      <About />
      <Skills />

      <Infobox
        id={workData.id}
        title={workData.title}
        titleImg={workData.titleImg}
        items={workData.items}
        details={workData.details}
      />
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
