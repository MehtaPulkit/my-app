import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaNpm } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import { Link } from "react-router-dom";
import companies from "../assets/all-companies.png";
import { featuredProjects, secondaryProjects } from "../config/projects";

const ProjectLink = ({ href, children, variant = "secondary" }) => {
  const base =
    "relative z-10 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-blue-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-200"
      : "border border-zinc-300 text-zinc-800 hover:border-blue-500 hover:text-blue-600 dark:border-zinc-600 dark:text-zinc-100 dark:hover:text-blue-400";

  return href?.startsWith("/") ? (
    <Link to={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
};

const FeaturedProjectCard = ({ project, featured = false }) => (
  <article
    className={`rounded-lg border border-zinc-200 p-5 transition hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500 ${featured ? "lg:col-span-2" : ""
      }`}
  >
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-white p-2 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="max-h-10 max-w-10 rounded-md object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </div>
    </div>

    <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
      <p>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          Problem solved:
        </span>{" "}
        {project.problem}
      </p>
      <p>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          My role:
        </span>{" "}
        {project.role}
      </p>
      <p>
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          Impact:
        </span>{" "}
        {project.impact}
      </p>
    </div>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100"
        >
          {tech}
        </span>
      ))}
    </div>

    {project.packageLinks && (
      <div className="mt-5 flex flex-wrap gap-3">
        {project.packageLinks.map((pkg) => (
          <a
            key={pkg.url}
            href={pkg.url}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400"
          >
            <FaNpm className="h-5 w-5 text-red-600" aria-hidden="true" />
            {pkg.label}
          </a>
        ))}
      </div>
    )}

    <div className="mt-6 flex flex-wrap gap-3">
      <ProjectLink href={project.liveUrl} variant="primary">
        {project.id === "design-system" && (
          <SiStorybook className="h-4 w-4" aria-hidden="true" />
        )}
        Live Demo
        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
      </ProjectLink>
      {project.githubUrl && (
        <ProjectLink href={project.githubUrl}>
          <FaGithub aria-hidden="true" />
          GitHub
        </ProjectLink>
      )}
      {project.caseStudyUrl && (
        <ProjectLink href={project.caseStudyUrl}>Case Study</ProjectLink>
      )}
    </div>
  </article>
);

const Project = () => {
  const designSystemProject = featuredProjects.find(
    (project) => project.id === "design-system",
  );
  const otherProjects = featuredProjects.filter(
    (project) => project.id !== "design-system",
  );

  return (
    <div>
      <h1 className="mt-16 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        Projects & Engineering Work
      </h1>
      <p className="my-6 max-w-3xl text-zinc-600 dark:text-zinc-400">
        A focused selection of client work, design-system engineering and
        full-stack product projects. The strongest portfolio signals now appear
        first: shipped websites, reusable UI systems and then case-study app
        builds.
      </p>
      <section aria-labelledby="company-experience" className="my-10">
        <h2
          id="company-experience"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          Company experience
        </h2>
        <img
          alt="Companies Pulkit has worked with"
          src={companies}
          loading="lazy"
          className="m-auto mt-6 md:h-48"
        />
      </section>
      <section aria-labelledby="secondary-projects" className="my-12">
        <h2
          id="secondary-projects"
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          Freelance project work
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {secondaryProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-lg border border-zinc-200 p-5 dark:border-zinc-700"
            >
              <div className="flex min-h-14 items-center gap-4">
                <div className="flex h-14 w-24 flex-none items-center justify-center rounded-md bg-white p-2 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-200"
                >
                  Live site
                  <ArrowTopRightOnSquareIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {designSystemProject && (
        <section aria-labelledby="design-system" className="my-14">
          <h2
            id="design-system"
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            Design system
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FeaturedProjectCard project={designSystemProject} featured />
          </div>
        </section>
      )}

      <section aria-labelledby="other-projects" className="my-14">
        <h2
          id="other-projects"
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          Other engineering projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <FeaturedProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>


    </div>
  );
};

export default Project;
