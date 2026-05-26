const leadershipItems = [
  {
    title: "Ownership and architecture",
    copy: "Own features from discovery through deployment, shaping APIs, component boundaries and delivery plans that fit product goals.",
  },
  {
    title: "Reusable UI systems",
    copy: "Create maintainable React components and design-system patterns that reduce duplication and improve UX consistency.",
  },
  {
    title: "Product collaboration",
    copy: "Work closely with product managers, designers and stakeholders to turn ambiguous requirements into practical engineering plans.",
  },
  {
    title: "Engineering quality",
    copy: "Use code reviews, testing, debugging and incremental refactoring to keep production systems reliable and easy to evolve.",
  },
  {
    title: "Team enablement",
    copy: "Mentor engineers through technical discussion, pairing and review feedback, while supporting onboarding and knowledge sharing.",
  },
];

const Leadership = () => {
  return (
    <section className="my-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
        Senior engineering
      </p>
      <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        How I work with teams
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {leadershipItems.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-700"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
