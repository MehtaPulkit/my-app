import cdLogo from "../assets/clear_dynamics_logo.jpg";
import deakinUni from "../assets/deakinUni.jpg";
import infosysLogo from "../assets/infosys_logo.jpg";
import montuLogo from "../assets/montu_group_logo.jpg";
import panjabUni from "../assets/panjabUni.jpg";
export const educationData = {
  id: "education",
  titleImg:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO2ZT2vUQBjGI1hUUFT8AOI3UL+ANwUP4p/v4cGbngp1Bb31IgRK53nSLmTeldqT1z24Sy8iIh4E7+JFKWjRFiHyNo3GNZvMJrubVPLAsNndmcz85v2zmXc9r1WrVv+/SPsIkF1Sopy2Dcgb0i6trz87P3qPIJALpHTiPrKddy/Ec3WmBuCw+JFmd4yxd/9sgNwj5fuE9/gxNYDJJv5rEYuAPCw73puFu4wbJyIngd5VQF7mLGpAhte076SbBVe3KnKXovH9fv8oIOG/C7Ci3xWNZ1W3moZZfV9Ok/I5tXtf9DOXsaw6f1bnMn4JSJACCFzHser80wLQdJoy/dJhBFhMZ6MWgK0FpHUhF7ENYrZZaF9tGmUDfsgAu7m2Fl52eYhrXBAbIxdd+zYSIBFgHwPyTc8JgH1A9i5FUXTkEAHI14yzwUfSrgZBeHPUvZoIkHdCiwA77Ha7Z1Nz7TUCwPf9hRhA3Sb/kELKqwTCmPBOAlErAClX9FWzkANABNjX5Ma5eGzvtkLUCqA7v7KyeUoDNvb5YgiOWKJWgIOSyo2D61VHgChtidoBSHmq14DccgXgiCXGBfZcAAD5tLz84lhcarHDshAmI7DnAhC7hNzX97oYXVRVCK8qwPhmd0j7DpAncSH3N8BPrcZNC8IrAzB5cXe/kPs2qypRFaKsBTolIKJxZZWZQrCEv6uMeX6GDK+TslUEMFMIlgRIpBmHlI0igAoQg+QxpRBghm0vCchuCYgks2Wqmq/PBwKQ93kW6DQdApBdr4nqOkIA8sFrqrpOEO7V7johBtm7b4cicsJrunzfX9BsowGr/42p2+jOG2OO1722Vl5KvwA8PxAwzMFhPAAAAABJRU5ErkJggg==",
  title: "Education",
  items: [
    {
      title: "Deakin University",
      img: deakinUni,
      category: "University",
      type: "Degree",
      acheivement: "Masters of IT",
      detail: "Date",
      startYear: "2018",
      endYear: "2020",
    },
    {
      title: "Punjab University",
      img: panjabUni,
      category: "University",
      type: "Degree",
      acheivement: "Bachelors of Engineering",
      detail: "Date",
      startYear: "2012",
      endYear: "2016",
    },
  ],
};

export const workData = {
  id: "experience",
  titleImg:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2XT0rDQBTGZ6GCHkAFXXgH3Vgv4koEwQvoFdr65wRZ5XtTqM4rRRFdFxTd9gC6UNrYGwiCUBk6pRFpG2liX3R+8CAJ85L3zZcZ5inl+eNUq9UlwBwCfAOYFsBvvTAtIr4m4gOt64tKKkFwtUDEpwC/E3F3VNgxAJ/YHCWJMORlIm66Ij8AvtCat8PwbI2Z523Ya/sMMJd2jBPVtA4qCQRBMAvwgxPxCPD6uByi2gYRP/VyzH2j0ZhR0wbgfVfQM8ArSfMqlfoqwC82V2veU9MG4Dvnxs5Pc7XmXTcJtxMXwsxzgDkGzOu4RSowIoDLVoMi4iMBBU0YpmSFRO7BpsoZWtcKfWdUX5XKKdSv3wsRAnlHhEHeEWGQd0QY5B0RBnlHhEHekf/iCI/uOAcdnXQhlKjjNKXMhGhdK6T04qEd55eOLgXC8Hzrm5C0Y4TQbL5Hg5tODoV0slwj0bBfNfYrtFP8XjcTIXZXSjCTxZxsv1yOLfp4tK2IXGy/vw15IcIg74gwyDsiDPKOCIO8I4IdidJsrH6TMH6aTnhalR7FcadV6dFO+zTtUSnxCeDoCaeOV9sjAAAAAElFTkSuQmCC",
  title: "Work Experience",
  items: [
    {
      title: "Montu",
      img: montuLogo,
      category: "Company",
      type: "Role",
      acheivement: "Senior Full Stack Engineer",
      summary:
        "Led delivery and evolution of a production-critical Patient Management System across clinical workflows, platform modernisation and telehealth communication.",
      highlights: [
        "Led technical design decisions, API integration strategy and workflow architecture for patient engagement features supporting 1,000+ daily active users.",
        "Modernised a monolithic backend into modular APIs, improving scalability and reducing average API response times by ~30-40%.",
        "Reduced frontend data-load latency by ~35% through optimised React Query data fetching.",
        "Designed and implemented a real-time Call Now feature for instant patient-nurse communication.",
        "Integrated AWS Amazon Connect and built backend call-routing/session workflows, reducing call setup failures by ~25%.",
        "Implemented feature flags for zero-downtime rollout between V2 and V3, reducing release risk.",
        "Improved logging, validation and error handling, contributing to a ~20% reduction in production incidents.",
        "Collaborated with clinical, product and engineering stakeholders while contributing to code reviews and engineering standards.",
      ],
      stack:
        "TypeScript, React, React Query, Tailwind CSS, Node.js, NestJS, PostgreSQL, AWS, Terraform, S3, Lambda, SQS, Amazon Connect",
      detail: "Date",
      startYear: "Oct 2024",
      endYear: "Apr 2026",
    },
    {
      title: "Clear Dynamics",
      img: cdLogo,
      category: "Company",
      type: "Role",
      acheivement: "Full Stack Developer",
      summary:
        "Developed and maintained a loan origination platform used by financial institutions to process and manage customer loan applications.",
      highlights: [
        "Delivered end-to-end features supporting thousands of loan applications per month and improving processing efficiency.",
        "Built scalable React and Redux frontend architecture, reducing code duplication and improving development speed by ~25%.",
        "Integrated third-party identity verification services, reducing manual validation effort by ~40% and improving data accuracy.",
        "Introduced a component-based design system, reducing UI-related defects by ~30%.",
        "Developed Node.js backend APIs for secure data handling in a regulated financial-services environment.",
        "Implemented unit, integration and E2E testing, increasing test coverage to 80%+ and reducing regression issues.",
        "Reduced production bugs by ~20-25% through stronger testing and code-quality practices.",
        "Mentored junior developers and contributed to code reviews and technical discussions across the team.",
      ],
      stack:
        "React, TypeScript, Redux, Node.js, Express, MSSQL, Styled Components",
      detail: "Date",
      startYear: "Mar 2020",
      endYear: "Jun 2024",
    },
    {
      title: "Infosys",
      img: infosysLogo,
      category: "Company",
      type: "Role",
      acheivement: "System Engineer",
      summary:
        "Developed a web-based online music streaming application for uploading, sharing and streaming music.",
      highlights: [
        "Built responsive frontend interfaces used by thousands of users with consistent cross-browser performance.",
        "Improved page-load performance by ~20% through frontend optimisation techniques.",
        "Integrated frontend screens with backend APIs, improving data-flow reliability and user experience.",
      ],
      stack: "AngularJS, JavaScript, HTML, CSS, Java",
      detail: "Date",
      startYear: "Jul 2016",
      endYear: "Feb 2018",
    },
  ],
};
