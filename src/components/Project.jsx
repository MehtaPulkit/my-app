import { LinkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import companies from "../assets/all-companies.png";
import edu from "../assets/edu.jpeg";
import fwLogo from "../assets/fw-full-logo.png";
import hwLogo from "../assets/hw-logo.jpg";
import thriveeeLogo from "../assets/thriveee.png";
import tlogo from "../assets/thriveeeLogo.svg";
import wlogo from "../assets/w-logo.svg";
const Project = () => {
  const freeLancingProjects = [
    {
      name: "Hayeswinckle",
      desc: "Hayeswinckle Real Estate Agency in Geelong offers specialist property services to buy, sell and rent real estate.",
      img: hwLogo,
      url: "https://www.hayeswincklegeelong.com.au/agents",
    },
    {
      name: "Fastway Junk Removal",
      desc: "Fastway Junk Removal offers professional junk removal services in Geelong.",
      img: fwLogo,
      url: "https://www.fastwayjunkremoval.com.au/",
    },
    {
      name: "Thriveee",
      desc: "Thriveee is a platform that connects professional service to the clients at your doorstep across Australia.",
      img: thriveeeLogo,
      url: "https://www.thriveee.com.au/",
    },

  ];
  const projects = [
    {
      name: "Investio",
      desc: "Accounting software, managing your wealth for future success",
      img: tlogo,
      url: "project/investio",
    },
    {
      name: "Edu Hub",
      desc: "Online Learning Platform System, Education is just a click away.",
      img: edu,
      url: "project/lms",
    },
    {
      name: "WMS",
      desc: "Women safety application, for you anywhere anytime!",
      img: wlogo,
      url: "project/wms",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mt-16 text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Projects & Engineering Work
      </h1>
      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          Throughout my career, I’ve worked on building and scaling
          production-grade applications across industries including healthcare,
          finance, and energy. <br />
          My experience includes delivering full-stack solutions, improving
          system architecture, and building user-focused features in
          collaboration with cross-functional teams.
          <br /> I led the development of innovative web applications that
          streamlined business processes and I collaborated with
          cross-functional teams to deliver high-quality software solutions for
          diverse clients. These projects have honed my ability to deliver
          exceptional results and adapt to various industries' unique
          requirements.
        </p>
      </div>
      <h2 className="font-bold text-lg">Companies:</h2>
      <img alt="companies" src={companies} className="md:h-48 m-auto" />
      {/* Freelance projects */}
      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          <b className="text-lg">Freelancing Projects:</b>
          <br />
          In addition to my corporate experience, I have also taken on freelance projects that have allowed me to further expand my skill set and work on a variety of applications. These projects have included developing web applications, creating custom software solutions, and providing technical consulting services to clients across different industries. Through these freelance engagements, I have been able to apply my expertise in software development to solve unique challenges and deliver tailored solutions that meet the specific needs of my clients.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {freeLancingProjects.map((p, i) => (
            <li
              className="group relative flex flex-col items-start p-4 m-4 border border-solid border-gray-300 rounded-lg hover:border-gray-500 transition"
              key={i}
            >
              <div className="relative z-10 flex w-40 items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border p-2 rounded-sm dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ">
                <img src={p?.img} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div
                  className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 
                  group-hover:border
                group-hover:border-gray-300 group-hover:opacity-100 dark:bg-zinc-700/50
                group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"
                ></div>
                <Link to={p?.url}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{p?.name}</span>
                </Link>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p?.desc}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                Check it out <LinkIcon className="w-6 ml-2" />
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Other Projects */}
      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          <b className="text-lg">Other Projects:</b>
          <br />
          In addition to my freelance work, I have contributed to various open-source projects and personal initiatives that showcase my passion for software development and continuous learning. These projects reflect my commitment to exploring new technologies and solving real-world problems through innovative solutions.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <li
              className="group relative flex flex-col items-start p-4 m-4 border border-solid border-gray-300 rounded-lg hover:border-gray-500 transition"
              key={i}
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ">
                {" "}
                <img className="rounded-full" src={p?.img} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div
                  className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 
                  group-hover:border
                group-hover:border-gray-300 group-hover:opacity-100 dark:bg-zinc-700/50
                group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"
                ></div>
                <Link to={p?.url}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{p?.name}</span>
                </Link>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p?.desc}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                Check it out <LinkIcon className="w-6 ml-2" />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
