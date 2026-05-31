const techSections = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind", "MUI", "Vite", "Storybook"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "GraphQL APIs", "REST APIs"],
  },
  {
    title: "Database / Cloud",
    items: [
      "PostgreSQL",
      "Supabase",
      "Amazon RDS",
      "AWS S3",
      "AWS SQS",
      "AWS Lambda",
      "CloudFront",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Testing",
      "CI/CD",
      "Git",
      "Terraform",
      "Infrastructure as code",
      "Clean architecture",
      "Design System",
      "Performance",
      "Accessibility",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Engineering strengths
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {techSections.map((section) => (
          <div
            key={section.title}
            className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-700"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {section.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {section.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
