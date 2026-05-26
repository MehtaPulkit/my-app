import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile_pic.jpg";
import { profile } from "../config/profile";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: FaLinkedin,
  },
];

const About = () => {
  return (
    <section id="about" className="pt-10">
      <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Melbourne based
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            Pulkit Mehta - Senior Full-Stack Engineer
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I build scalable React, TypeScript and Node.js applications with
            strong UX, clean architecture and production-ready engineering.
          </p>
          <p className="mt-5 max-w-3xl text-zinc-600 dark:text-zinc-400">
            I work across frontend and backend systems: React and TypeScript
            interfaces, Node.js/NestJS APIs, SaaS product workflows, cloud
            deployment, testing, design systems and close collaboration with
            product and design teams. My focus is owning outcomes from
            architecture through delivery, with code that teams can maintain and
            extend.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-200"
            >
              View Projects
            </Link>
            <a
              href="#contact"
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-600 dark:text-zinc-100 dark:hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open Pulkit Mehta on ${link.label}`}
                className="rounded-full p-2 text-zinc-600 transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <link.Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="justify-self-start md:justify-self-end">
          <img
            className="h-32 w-32 rounded-full object-cover ring-4 ring-zinc-100 dark:ring-zinc-700 md:h-44 md:w-44"
            src={profilePic}
            alt="Pulkit Mehta"
            width="176"
            height="176"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
