import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../config/projects";

const ProjectPage = () => {
  const { projectID } = useParams();
  const project = getProjectById(projectID);

  if (!project) {
    return (
      <div className="mt-16">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="mt-16 sm:mt-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
      >
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        Back to projects
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-200"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-600 dark:text-zinc-100 dark:hover:text-blue-400"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          {[
            ["Overview", project.impact],
            ["Problem", project.problem],
            ["Solution", project.role],
          ].map(([title, copy]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {copy}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Architecture / technical choices
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Challenges
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.challenges?.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              What I would improve next
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {project.next?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-700">
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.screenshots.map((img, index) => (
            <img
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="rounded-lg border border-zinc-200 shadow-sm dark:border-zinc-700"
              loading="lazy"
              key={img}
            />
          ))}
        </aside>
      </div>
    </article>
  );
};

export default ProjectPage;
