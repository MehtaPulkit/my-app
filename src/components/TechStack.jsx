import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGithubactions,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const techSections = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Technologies I Work With
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {techSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {section.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {section.items.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition"
                  >
                    <Icon className="text-xl text-blue-500" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
