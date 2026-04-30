import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile_pic.jpg";

const About = () => {
  return (
    <section id="about">
      {/* Profile picture */}
      <div className="flex justify-between items-center">
        <div className="flex my-5 mt-10 flex-col">
          <Link to="/">
            <img
              className="w-20 h-20 rounded-[50%]"
              src={profilePic}
              alt="profile_picture"
            />
          </Link>
          <p className="text-xl font-bold items-center">Pulkit Mehta </p>
        </div>
        <Link
          to="https://www.linkedin.com/in/pulkit-mehta/"
          className="group -m-1 p-1"
          aria-label="Follow on LinkedIn"
          href="#"
        >
          <FaLinkedin size={40} className=" text-blue-600 inline" />
        </Link>
      </div>

      {/* Title */}

      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Senior Full-Stack Engineer <br />
      </h1>
      <h2 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400">
        (TypeScript / React / Nest.js)
      </h2>
      {/* Description */}
      <div className="my-4 md:my-10">
        <p className="my-2 dark:text-zinc-400">
          Senior Full Stack Engineer with 8+ years of experience building and scaling high-availability,
          customer-facing platforms across fintech and healthcare domains.
          Specialised in TypeScript, React, and Node.js, with a strong focus on system design, performance
          optimisation, and production reliability. Proven track record of delivering business-critical systems,
          modernising legacy architectures, and improving platform scalability in regulated environments.
          <br /><br />
          Actively leverage AI development tools (e.g., Cursor, Co-pilot) to accelerate feature delivery,
          improve code quality, and enhance debugging and refactoring workflows.
          Experienced in collaborating with cross-functional teams, mentoring engineers, and contributing
          to architectural decisions to deliver secure, resilient, and maintainable software systems.
        </p>
        <p>
          📍 Melbourne, Australia <br />
          💼 Open to Senior Software Engineer roles
        </p>
        <div className="my-8">
          <b className="text-xl">Technical Expertise:</b>{" "}
          <ol>
            <li className="mb-4">
              <i className="font-medium">Core Stack</i>{" "}
              <p>
                TypeScript • React • Node.js • NestJS • PostgreSQL • AWS •
                Docker
              </p>
            </li>
            <li className="mb-4">
              <i className="font-medium">Full Stack Development</i>{" "}
              <p className="dark:text-zinc-400">
                Experienced in building production-grade SaaS applications
                across the entire stack using TypeScript, React, and Node.js.
                Skilled at designing scalable backend systems with NestJS and
                REST/GraphQL APIs, while delivering responsive and maintainable
                frontends using React, modern state management, and
                component-driven architecture.
              </p>
            </li>{" "}
            <li className="mb-4">
              {" "}
              <i className="font-medium"> Databases</i>{" "}
              <p className="dark:text-zinc-400">
                Experienced in designing efficient data models and optimizing
                queries for scalable applications.
              </p>
              <p className="font-medium dark:text-zinc-400">Technologies:</p>
              <p className="dark:text-zinc-400">PostgreSQL • MongoDB • MSSQL</p>
            </li>{" "}
            <li className="mb-4">
              {" "}
              <i className="font-medium">Cloud & DevOps</i>{" "}
              <p className="dark:text-zinc-400">
                Experience building and deploying applications using modern
                DevOps and cloud practices, including automated CI/CD pipelines,
                containerized environments, and scalable infrastructure.
              </p>
              <p className="font-medium dark:text-zinc-400">Tools & platforms:</p>
              <p className="dark:text-zinc-400">
                Docker • Kubernetes • AWS • GitHub Actions • CI/CD pipelines
              </p>
            </li>
            <li className="mb-4">
              {" "}
              <i className="font-medium">Agile Methodologies</i>{" "}
              <p className="dark:text-zinc-400">
                Strong advocate for Agile practices with hands-on experience in
                Scrum and Kanban methodologies, fostering a collaborative and
                iterative approach to development.
              </p>
            </li>
            <li className="mb-4">
              {" "}
              <i className="font-medium">Performance & Scalability</i>{" "}
              <p className="dark:text-zinc-400">
                Focused on building systems that scale. Implemented performance
                improvements across frontend and backend systems, improving
                application responsiveness and reducing load times.
              </p>
            </li>
            <li className="mb-4">
              {" "}
              <i className="font-medium">
                Quality & Engineering Practices
              </i>{" "}
              <p className="dark:text-zinc-400">
                Committed to delivering reliable software through strong
                engineering practices including testing, debugging, code
                reviews, and maintainable architecture.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
