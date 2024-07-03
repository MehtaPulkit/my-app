import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile_pic.jpg";

const About = () => {
  return (
    <section id="about">
      {/* Profile picture */}
      <div className="flex my-5 mt-10">
        <Link to="/">
          <img
            className="w-20 h-20 rounded-[50%]"
            src={profilePic}
            alt="profile_picture"
          />
          Pulkit Mehta
        </Link>
      </div>
      {/* Title */}

      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Full Stack Engineer
      </h1>

      {/* Description */}
      <div className="my-10">
        <p className="my-2 dark:text-zinc-400">
          With over 6 years of experience as a Full Stack Engineer, I possess
          a robust track record of delivering cutting-edge, high-quality
          solutions across diverse projects. My expertise spans both front-end
          and back-end technologies, complemented by strong leadership
          capabilities that have consistently driven teams to exceed project
          expectations.
        </p>
        <div className="my-8">
          <b className="text-xl">Technical Expertise:</b>{" "}
          <ol>
            <li className="my-1">
              <i className="font-medium">Full Stack Development</i>{" "}
              <p className="dark:text-zinc-400">
                Proficient in building robust web applications from conception
                to deployment using a wide range of technologies including but
                not limited to HTML/CSS, JavaScript, React.js, .Net, Redux,
                Tailwind CSS, Express and Node.js.
              </p>
            </li>{" "}
            <li className="my-1">
              {" "}
              <i className="font-medium"> Database Management</i>{" "}
              <p className="dark:text-zinc-400">
                Skilled in designing and optimizing databases like MSSQL and MongoDB.
              </p>
            </li>{" "}
            <li className="my-1">
              {" "}
              <i className="font-medium">DevOps and Cloud Technologies</i>{" "}
              <p className="dark:text-zinc-400">
                Experienced in implementing CI/CD pipelines, containerization
                with Docker and orchestration with Kubernetes, as well as
                deploying applications on cloud platforms like Azure.{" "}
              </p>
            </li>
            <li className="my-1">
              {" "}
              <i className="font-medium">Agile Methodologies</i>{" "}
              <p className="dark:text-zinc-400">
                Strong advocate for Agile practices with hands-on experience in
                Scrum and Kanban methodologies, fostering a collaborative and
                iterative approach to development.
              </p>
            </li>
            <li className="my-1">
              {" "}
              <i className="font-medium">Performance Optimization</i>{" "}
              <p className="dark:text-zinc-400">
                Implemented optimization techniques that improved application
                performance by 20%, enhancing user experience and reducing load
                times.
              </p>
            </li>
            <li className="my-1">
              {" "}
              <i className="font-medium">Quality Assurance</i>{" "}
              <p className="dark:text-zinc-400">
                Conducted rigorous manual and automated testing and debugging of applications to
                ensure high-quality deliverables and adherence to client
                specifications.
              </p>
            </li>
          </ol>
        </div>
        <div className="my-8">
          <b className="text-xl">Leadership and Management:</b>
          <ol>
            <li className="my-1">
              <i className="font-medium">Team Leadership</i>
              <p className="dark:text-zinc-400">
                Proven ability to lead cross-functional teams of developers,
                designers, and stakeholders to achieve project objectives within
                budget and timelines.
              </p>
            </li>{" "}
            <li className="my-1">
              <i className="font-medium"> Technical Mentorship</i>{" "}
              <p className="dark:text-zinc-400">
                Passionate about knowledge sharing and mentorship, guiding team
                members to enhance their technical skills and professional
                development.
              </p>
            </li>{" "}
            <li className="my-1">
              <i className="font-medium"> Strategic Planning</i>{" "}
              <p className="dark:text-zinc-400">
                {" "}
                Proficient in aligning technical initiatives with business
                goals, developing roadmaps, and executing strategies to drive
                innovation and growth.{" "}
              </p>
            </li>
            <li className="my-1">
              <i className="font-medium">Stakeholder Engagement</i>{" "}
              <p className="dark:text-zinc-400">
                Effective communicator with a demonstrated ability to establish
                and maintain strong relationships with clients, ensuring
                transparency and alignment throughout the project lifecycle.
              </p>
            </li>
            <li className="my-1">
              <i className="font-medium">Training and Development</i>{" "}
              <p className="dark:text-zinc-400">
                Developed and executed comprehensive training programs,
                including workshops and tutorials, which enhanced team
                productivity by 30%.
              </p>
            </li>
            <li className="my-1">
              <i className="font-medium">Recruitment and Talent Acquisition</i>{" "}
              <p className="dark:text-zinc-400">
                Oversaw the recruitment process, defining job requirements,
                conducting interviews, and selecting top-tier developers,
                leading to a 25% increase in team performance.
              </p>
            </li>
          </ol>
        </div>
        <div className="my-2">
          <p className="dark:text-zinc-400">
            With a blend of technical expertise, leadership acumen, and a
            passion for driving innovation, I am dedicated to delivering
            impactful solutions that exceed client expectations and drive
            business growth. I am excited about the opportunity to contribute my
            skills and experience to future projects, driving success and
            fostering a culture of continuous improvement.
          </p>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/pulkit-mehta/"
            className="group -m-1 p-1"
            aria-label="Follow on LinkedIn"
            href="#"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEklEQVR4nO2YO08CQRDH11jYGisTW7X1E1jZKcTSL2EQJHJbEAsJiZ2FhZ2FpbWFDY/IO0YN3GIEiQWFxhhBER8oMGZvFVC4wJ3mbi/ZfzIh7GyW+e3Mzh2LkJCQkBDfkrKLSCJhhEkVYQIGWRVhEkKSbP9b8FjeNDBoUDG//p03P3hgJtt0AChlw0HwBJBEgjoA5CeOMlDRDqC2mCcNyJUEtBJjn/S7ERCapRL8tC8FR5dlqNbqECmUYWojZQyEZvVaxJVUgu5UOF9mmbAEwEpM2flOPb3VWTlZAsBl9Qx42BmgEDQToXwJJi11BrDVu5AzAcgR7TY63s8vZQC5j9tznF8bsHZK+7xBAI4I9BId7+ef8CZhK1iE7HUVXt8b8PDyoZTi8n4ORtyJ/pk0E2DGn4LbSg3UdFKswLg3ybLEI0Dh7gX6KZQvwZArzifAoJrfyaiXkpkAjWZTqf+57TQs7WYhcFHqOW8vdcMOOm8A6wdXLDBa4540DK8m4PD8vmte7va53dF4AhjD8Z+t0pOG2a2zrnmPrx/qryVmATSbHf6WyTAqJVTmRvkCYP6o9rWwACAiA98SJYTFISaiCyHRRv/lH1mcPWh+Gx0fxK9lLfzXBxlPV4uS/KgdgN7Pmx04br07BfRkwM5PBjIL2gFYFvymB4+JT1/wLQjZptzPG3kmJPpbckD/zgsJCQkhg/QJ3PVUWJ5Zt98AAAAASUVORK5CYII="
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
