import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../config/profile";

const contactActions = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    Icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: profile.github,
    Icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="my-16 rounded-lg border border-zinc-200 p-6 dark:border-zinc-700"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
        Contact
      </p>
      <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Open to senior frontend, full-stack and product-focused engineering
        roles.
      </h2>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
        The fastest way to reach me is by email or LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {contactActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-zinc-600 dark:text-zinc-100 dark:hover:text-blue-400"
          >
            <action.Icon aria-hidden="true" />
            {action.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
