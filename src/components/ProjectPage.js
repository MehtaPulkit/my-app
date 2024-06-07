import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import thmain from "../assets/th-main.png";
import thdash from "../assets/th-dash.png";
import thdark from "../assets/th-dark.png";
import lmsmain from "../assets/lms-main.png";
import lmsdash from "../assets/lms-dash.png";
import lmsdark from "../assets/lms-dark.png";
import wmsmain from "../assets/wms-main.png";
import wmsdash from "../assets/wms-dash.png";
import wmscontact from "../assets/wms-contact.png";
import { ArrowUpRightIcon, LinkIcon } from "@heroicons/react/20/solid";

const ProjectPage = () => {
  const { projectID } = useParams();
  const [selectedProject, setSelectedProject] = useState();
  const content = [
    {
      name: "thriveee",
      title: "Thriveee",
      heading: "Accounting software, managing your wealth for future success",
      url: "https://thriveee.onrender.com",
      github: "https://github.com/MehtaPulkit/thriveee",
      description: (
        <div>
          This project was designed to provide robust accounting functionalities
          tailored for small to medium-sized enterprises, ensuring that users
          can manage their financial data efficiently and accurately. <br />
          Involved The backend of the application is built with Node.js and
          Express.js, providing a scalable and efficient server-side
          environment.
          <br /> MongoDB is used as the database solution, taking advantage of
          its flexibility and scalability to manage complex financial data. The
          backend services include RESTful APIs to handle CRUD operations for
          various accounting entities such as transactions, invoices, and
          reports.
          <br /> On the frontend, React.js was chosen for its component-based
          architecture, which allows for the development of a dynamic and
          responsive user interface. State management is handled by Redux,
          ensuring consistent and predictable state transitions across the
          application. The integration of Tailwind CSS significantly enhanced
          the development process by providing a utility-first CSS framework,
          allowing for rapid UI styling and customization.
          <br />
          <br />
          <b>Key Features:</b>
          <br />
          <b>User Authentication and Authorization: </b>
          Implemented using JWT, ensuring secure access to sensitive financial
          data.
          <br />
          <b>Mobile Responsiveness:</b> The application was designed with
          mobile-first principles, ensuring optimal performance and usability
          across a range of devices.
          <br />
          <b>Tailwind CSS:</b> Tailwind CSS was utilized extensively throughout
          the project to create a modern, clean, and consistent user interface.
          <br />
          <b>Dashboard with Recharts:</b> Using the Recharts library, I
          implemented a variety of graphs and charts to display income and
          expense data.
          <br />
          <b>Accounting Features:</b> The software includes a variety of
          features tailored to meet the needs of accounting professionals and
          business owners.
          <br />
          <b>User Management:</b> Users can easily record, edit, and categorize
          contacts. <br />
          <b>Invoice Generation:</b> The application supports the creation and
          management of professional invoices, which can be customized and sent
          directly to clients.
          <br />
          <b>Financial Reporting:</b> The software generates comprehensive
          financial reports, including balance sheets, income statements, and
          cash flow statements, providing users with valuable insights into
          their financial health. <br />
          <br />
        </div>
      ),
      images: [thmain, thdash, thdark],
    },
    {
      name: "lms",
      title: "Edu Hub",
      url: "https://client-lms.onrender.com",
      github: "https://github.com/MehtaPulkit/wms",
      heading:
        "Online Learning Platform System, Education is just a click away.",
      description: (
        <div>
          In response to the growing demand for accessible and flexible
          education, I developed a comprehensive online learning platform using
          the MERN stack, consisting of MongoDB, Express.js, React.js, and
          Node.js. This platform is designed to facilitate seamless online
          learning experiences, offering a robust set of features for
          administrators to manage courses, track enrollments, and monitor
          revenue.
          <br />
          <b>Technical Skills </b>
          The backend of the platform is built with Node.js and Express.js,
          providing a robust server-side environment that handles various
          functionalities such as user authentication, course management, and
          data retrieval. MongoDB is utilized as the database solution, offering
          scalability and flexibility to manage complex data structures,
          including course materials, user profiles, and financial records. The
          backend services include RESTful APIs that manage CRUD operations for
          courses, handle user enrollments, and track revenue. On the frontend,
          React.js was chosen for its efficient rendering capabilities and
          component-based architecture, which allows for a dynamic and
          responsive user interface. State management is handled by Redux,
          ensuring that the application maintains consistent state across
          various components. Tailwind CSS was used to create a modern,
          responsive, and visually appealing design, making the platform
          user-friendly and accessible on various devices.
          <br />
          <b> Key Features</b>
          <br />
          <b>Admin Dashboard: </b>
          The platform features a comprehensive admin dashboard that serves as
          the control center for managing all aspects of the online learning
          environment. The dashboard provides administrators with an overview of
          all courses offered, tracking student enrollments and monitoring
          revenue. This centralized view allows for efficient management and
          quick decision-making, ensuring that administrators can easily oversee
          the platform's operations.
          <br />
          <b>Course Management: </b>
          Administrators have the ability to create and manage courses directly
          from the dashboard. This includes adding new courses, updating
          existing ones, and organizing content into modules and lectures. Each
          course can include various types of content, such as lecture videos,
          reading materials, and quizzes. The ability to upload and manage
          lecture videos is seamlessly integrated, providing a smooth process
          for content creation and updates.
          <br />
          <b>Enrollment Tracking: </b>
          The platform includes detailed tracking of student enrollments, giving
          administrators insights into which courses are popular and how
          students are engaging with the content. This feature helps in
          identifying trends and making data-driven decisions to improve course
          offerings and marketing strategies. Enrollment statistics can be
          viewed in real-time, ensuring that administrators are always informed
          about the platform's performance.
          <br />
          <b>Revenue Monitoring: </b>
          An integral part of the admin dashboard is the revenue tracking
          feature. Administrators can monitor income generated from course
          enrollments, view financial reports, and analyze revenue trends. This
          transparency in financial data helps in budgeting, forecasting, and
          strategic planning, ensuring the platform remains financially viable
          and can continue to grow.
          <br />
          <b>Responsive Design with Tailwind CSS: </b>
          The platform's user interface is designed with a mobile-first approach
          using Tailwind CSS, ensuring that the application is fully responsive
          and accessible on various devices. This design philosophy guarantees
          that both administrators and students have a smooth and consistent
          experience, whether they are accessing the platform on a desktop,
          tablet, or smartphone.
        </div>
      ),
      images: [lmsdark, lmsmain, lmsdash],
    },
    {
      name: "wms",
      title: "Women Safety Application",
      url: "https://wms-5uub.onrender.com",
      github: "https://github.com/MehtaPulkit/client-lms",
      heading: "Safety for all, anywhere, anytime!",
      description: (
        <div>
          In a bid to enhance women's safety and provide real-time support, I
          developed a comprehensive web application using the MERN stack,
          comprising MongoDB, Express.js, React.js, and Node.js. This project is
          designed to offer robust safety features for women, ensuring they can
          reach out for help quickly and efficiently during emergencies.
          <br /> <b>Technical Skills:</b>
          <br /> The backend of the application is built with Node.js and
          Express.js, forming a solid foundation for handling real-time data and
          user interactions. MongoDB serves as the database, storing user
          profiles, emergency contacts, and real-time location data. The backend
          includes RESTful APIs to manage user data, track locations, and handle
          emergency alerts. The frontend is developed using React.js, chosen for
          its efficiency in building interactive and dynamic user interfaces.
          State management is handled by Redux, ensuring consistent data flow
          and state updates across the application. The integration of Tailwind
          CSS helps in creating a responsive and visually appealing design,
          ensuring the application is accessible and user-friendly across
          various devices.
          <br />
          <br /> <b>Key Features:</b>
          <br />
          <b>Live Location Tracking:</b> A key feature of the application is the
          dashboard that keeps track of the user’s live location. Using the
          Geolocation API, the application continuously updates the user’s
          position, displaying it on an interactive map. This feature ensures
          that the user's location is always known, providing peace of mind and
          facilitating quick responses in case of an emergency.
          <br /> <b>SOS Button:</b> The application includes an SOS button
          prominently displayed on the user interface. When pressed, this button
          triggers an immediate alert, sending an SOS message via SMS and email
          to the user’s pre-defined emergency contacts. The SOS functionality is
          powered by the Nodemailer library, which handles the email dispatch
          efficiently, while SMS alerts are integrated using third-party APIs
          like Twilio. This ensures that help is just a button press away,
          providing a critical lifeline in moments of danger. <br />
          <b>Emergency Alerts:</b> The SOS alerts include the user’s current
          location and a pre-configured distress message. This real-time
          communication ensures that the user’s contacts are promptly informed
          about the emergency, along with the exact location, enabling swift
          assistance. The alerts are designed to be instantaneous, leveraging
          both email and SMS channels to maximize the chances of a quick
          response. <br />
          <b>Responsive Design with Tailwind CSS:</b> The user interface is
          designed with a mobile-first approach, using Tailwind CSS to ensure
          that the website is fully responsive. This design philosophy ensures
          that the application performs optimally on smartphones, which are the
          most likely devices users will have on hand during emergencies. The
          responsive design guarantees that all features, from the live location
          tracking to the SOS button, are easily accessible on any device.
        </div>
      ),
      images: [wmsmain, wmsdash, wmscontact],
    },
  ];
  useEffect(() => {
    if (projectID) {
      setSelectedProject(content.find((c) => c.name == projectID));
    }
  }, [projectID]);
  return (
    <div className="sm:px-8 mt-16 sm:mt-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8 text-zinc-800 sm:text-5xl dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 hover:cursor-pointer">
        <a href={selectedProject?.url} target="_blank">
          {selectedProject && selectedProject?.title}{" "}
          <ArrowUpRightIcon className="w-8 inline" />
        </a>
      </h1>
      <div className="flex gap-9 flex-col-reverse sm:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold tracking-tight mb-8 text-zinc-800 sm:text-xl dark:text-zinc-100">
            {selectedProject?.heading}
          </h3>
          {selectedProject?.description}
        </div>
        <div>
          {selectedProject?.images.map((img, k) => (
            <img src={img} alt="" className="mt-6 rounded-2xl w-96" key={k} />
          ))}

          <hr className="my-6" />
          <a
            href={selectedProject?.url}
            target="_blank"
            className="hover:text-teal-500 dark:hover:text-teal-400 hover:cursor-pointer font-semibold"
          >
            <LinkIcon className="w-6 inline" /> Check the live website
          </a>
          <br />
          <a
            href={selectedProject?.github}
            target="_blank"
            className="hover:text-teal-500 dark:hover:text-teal-400 hover:cursor-pointer font-semibold"
          >
            <svg
              className="w-6 h-6 text-gray-800 inline dark:text-white hover:text-teal-500 dark:hover:text-teal-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Check the code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
