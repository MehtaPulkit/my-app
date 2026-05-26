import edu from "../assets/edu.jpeg";
import designSystemLogo from "../assets/design-system-logo.svg";
import fwLogo from "../assets/fw-full-logo.png";
import hwLogo from "../assets/hw-logo.jpg";
import lmsdark from "../assets/lms-dark.png";
import lmsdash from "../assets/lms-dash.png";
import lmsmain from "../assets/lms-main.png";
import thdark from "../assets/th-dark.png";
import thdash from "../assets/th-dash.png";
import thmain from "../assets/th-main.png";
import thriveeeLogo from "../assets/thriveee.png";
import tlogo from "../assets/thriveeeLogo.svg";
import wlogo from "../assets/w-logo.svg";
import wmscontact from "../assets/wms-contact.png";
import wmsdash from "../assets/wms-dash.png";
import wmsmain from "../assets/wms-main.png";

export const featuredProjects = [
  {
    id: "investio",
    title: "Investio",
    summary:
      "A full-stack accounting platform for managing contacts, invoices, transactions, dashboards and financial reports.",
    problem:
      "Small business users need a simpler way to manage day-to-day accounting workflows without switching between disconnected tools.",
    role:
      "Owned the full-stack build across React UI, REST APIs, authentication, dashboard flows and responsive implementation.",
    impact:
      "Demonstrates product thinking, data-heavy UI design, secure auth, CRUD architecture and dashboard visualisation.",
    decisions: [
      "Used React with Redux to keep financial workflows predictable across forms, tables and dashboards.",
      "Built REST APIs around core accounting resources such as contacts, invoices, transactions and reports.",
      "Used Tailwind CSS to move quickly while keeping a consistent responsive interface.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Recharts"],
    liveUrl: "https://thriveee.onrender.com",
    githubUrl: "https://github.com/MehtaPulkit/thriveee",
    caseStudyUrl: "/projects/project/investio",
    image: tlogo,
    screenshots: [thmain, thdash, thdark],
    imageAlt: "Investio dashboard preview",
    challenges: [
      "Keeping financial forms, dashboard summaries and API state consistent across multiple workflows.",
      "Designing a UI that remains usable on smaller screens while still showing dense business data.",
    ],
    next: [
      "Add stronger automated test coverage around invoice and reporting flows.",
      "Introduce richer role-based permissions and production observability.",
    ],
  },
  {
    id: "lms",
    title: "Edu Hub",
    summary:
      "An online learning platform with course management, enrolment tracking, admin dashboards and revenue visibility.",
    problem:
      "Course operators need a central place to manage learning content, student enrolments and commercial performance.",
    role:
      "Designed and implemented the MERN application, including admin workflows, course CRUD, dashboard screens and API integration.",
    impact:
      "Shows SaaS admin-product thinking, role-based workflows, dashboard UX and full-stack delivery.",
    decisions: [
      "Modelled course, user and enrolment data around clear API resources.",
      "Used Redux for shared application state across admin and course-management flows.",
      "Prioritised responsive layouts so administrators can monitor the platform across devices.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://client-lms.onrender.com",
    githubUrl: "https://github.com/MehtaPulkit/wms",
    caseStudyUrl: "/projects/project/lms",
    image: edu,
    screenshots: [lmsdark, lmsmain, lmsdash],
    imageAlt: "Edu Hub learning platform preview",
    challenges: [
      "Balancing course-management complexity with a clear administrator experience.",
      "Keeping dashboard and enrolment data easy to scan without overloading the UI.",
    ],
    next: [
      "Add automated API and component tests around core admin workflows.",
      "Add analytics events for course engagement and funnel reporting.",
    ],
  },
  {
    id: "wms",
    title: "Women Safety Application",
    summary:
      "A safety-focused web app with live location tracking, SOS alerts and emergency-contact workflows.",
    problem:
      "Users need a fast way to share location and alert trusted contacts during a potential emergency.",
    role:
      "Built the full-stack application across React UI, location workflows, backend APIs and notification integration.",
    impact:
      "Demonstrates real-time UX, geolocation, notification-oriented workflows and careful mobile-first design.",
    decisions: [
      "Used the Geolocation API to support live-location workflows.",
      "Structured emergency-contact and alert flows around clear backend endpoints.",
      "Designed the SOS interaction for mobile-first access and low-friction action.",
    ],
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Geolocation API", "Nodemailer"],
    liveUrl: "https://wms-5uub.onrender.com",
    githubUrl: "https://github.com/MehtaPulkit/client-lms",
    caseStudyUrl: "/projects/project/wms",
    image: wlogo,
    screenshots: [wmsmain, wmsdash, wmscontact],
    imageAlt: "Women Safety Application preview",
    challenges: [
      "Making emergency actions prominent while keeping the rest of the app calm and understandable.",
      "Handling location and alert state reliably across frontend and backend flows.",
    ],
    next: [
      "Harden notification delivery with retries, delivery logs and monitoring.",
      "Improve accessibility testing for the emergency interaction path.",
    ],
  },
  {
    id: "design-system",
    title: "Pulkit Design System",
    summary:
      "A demonstration design system with React components, shared tokens and Storybook documentation published to npm.",
    problem:
      "Growing products need reusable components and design foundations to keep UI delivery consistent.",
    role:
      "Built the component package, token package and Storybook documentation for a reusable design-system workflow.",
    impact:
      "Highlights component-driven architecture, package publishing, Storybook documentation and design-system thinking.",
    decisions: [
      "Separated React components from design tokens so foundations can be reused independently.",
      "Used Storybook as the documentation and demonstration surface.",
      "Published packages to npm to mirror real-world design-system distribution.",
    ],
    stack: ["React", "TypeScript", "Design Tokens", "Storybook", "npm", "Vite"],
    liveUrl: "https://pulkit-design-system-storybook.vercel.app/?path=/docs/introduction--docs",
    githubUrl: "",
    caseStudyUrl: "",
    image: designSystemLogo,
    screenshots: [],
    imageAlt: "Pulkit Design System package preview",
    packageLinks: [
      {
        label: "@pulkit-design-system/react",
        url: "https://www.npmjs.com/package/@pulkit-design-system/react",
      },
      {
        label: "@pulkit-design-system/tokens",
        url: "https://www.npmjs.com/package/@pulkit-design-system/tokens",
      },
    ],
  },
];

export const secondaryProjects = [
  {
    title: "Hayeswinckle",
    summary: "Real estate agency website work for a property business.",
    liveUrl: "https://www.hayeswincklegeelong.com.au/agents",
    image: hwLogo,
    imageAlt: "Hayeswinckle logo",
  },
  {
    title: "Fastway Junk Removal",
    summary: "Service website for a junk removal business.",
    liveUrl: "https://www.fastwayjunkremoval.com.au/",
    image: fwLogo,
    imageAlt: "Fastway Junk Removal logo",
  },
  {
    title: "Thriveee",
    summary: "Marketplace platform connecting professional services with clients across Australia.",
    liveUrl: "https://www.thriveee.com.au/",
    image: thriveeeLogo,
    imageAlt: "Thriveee logo",
  },
];

export const getProjectById = (id) =>
  featuredProjects.find((project) => project.id === id);
