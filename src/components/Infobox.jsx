const Infobox = ({ id, titleImg, title, items }) => {
  return (
    <section id={id} className="my-12">
      <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
        <h2 className="flex text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          <img className="w-6" src={titleImg} alt="" aria-hidden="true" />
          <span className="ml-3">{title}</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {items.map((item) => (
            <li className="flex gap-4" key={item?.title}>
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-400 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt={`${item?.title} logo`}
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="h-7 w-7 rounded-full"
                  src={item?.img}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">{item?.category}</dt>
                <dd className="w-full flex-none font-medium text-zinc-900 dark:text-zinc-100">
                  {item?.title}
                </dd>
                <dt className="sr-only">{item?.type}</dt>
                <dd className="text-sm text-gray-700 dark:text-white">
                  {item?.acheivement}
                </dd>
                {item?.summary && (
                  <dd className="mt-2 w-full text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.summary}
                  </dd>
                )}
                {item?.highlights && (
                  <dd className="mt-3 w-full">
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </dd>
                )}
                {item?.stack && (
                  <dd className="mt-3 w-full text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Tech stack:
                    </span>{" "}
                    {item.stack}
                  </dd>
                )}
                <dt className="sr-only">{item?.detail}</dt>
                <dd
                  className="ml-auto text-sm text-zinc-700 dark:text-white"
                  aria-label={`${item?.startYear} - ${item?.endYear}`}
                >
                  <time dateTime={item?.startYear}>{item?.startYear}</time>{" "}
                  <span aria-hidden="true">-</span>{" "}
                  <time dateTime={item?.endYear}>{item?.endYear}</time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Infobox;
