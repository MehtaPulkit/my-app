import React from "react";
import companies from "../assets/companies.jpeg";
import edu from "../assets/edu.jpeg";
import wlogo from "../assets/w-logo.svg";
import tlogo from "../assets/thriveeeLogo.svg";
import { LinkIcon } from "@heroicons/react/20/solid";

const Project = () => {

  const projects = [
    {
      name: "Thriveee",
      desc: "Accounting software, managing your wealth for future success",
      img: tlogo,
      url: "",
    },
    {
      name: "Edu Hub",
      desc: "Online Learning Platform System, Education is just a click away.",
      img: edu,
      url: "",
    },
    {
      name: "WMS",
      desc: "Women safety application, for you anywhere anytime!",
      img: wlogo,
      url: "",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mt-16 text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Things I’ve made trying to put my dent in the universe.
      </h1>

      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          Throughout my career, I have had the privilege of working on numerous
          projects for prominent companies, including Cargill, Bank of
          Queensland, Latitude Financial Services and Energy Australia. These
          experiences have allowed me to apply my full-stack development skills
          and technical leadership to a range of challenging and impactful
          projects. I led the development of innovative web applications that
          streamlined business processes and I collaborated with
          cross-functional teams to deliver high-quality software solutions for
          diverse clients. These projects have honed my ability to deliver
          exceptional results and adapt to various industries' unique
          requirements.
        </p>
      </div>
      <img alt="companies" src={companies} className="h-24 m-auto" />
      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          Apart from that:
          <br />
          Explore a selection of my key projects that demonstrate my skills in
          full-stack development, technical leadership, and problem-solving.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <li className="group relative flex flex-col items-start p-2 m-4" key={i}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 ">
                {" "}
                <img className="rounded-full" src={p?.img} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"></div>
                <a href="#">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{p?.name}</span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p?.desc}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                Check it out <LinkIcon className="w-6 ml-2"/>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
