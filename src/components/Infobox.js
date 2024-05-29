import React from "react";

const Infobox = ({ id, titleImg, title, items }) => {
  return (
    <section id={id} className="my-5">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-300">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <img className="w-6" src={titleImg} />
          <span className="ml-3">{title}</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {items.map((item) => (
            <li className="flex gap-4" key={item?.title}>
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-400 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
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
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item?.title}
                </dd>
                <dt className="sr-only">{item?.type}</dt>
                <dd className="text-xs text-gray-700 dark:text-white">
                  {item?.acheivement}
                </dd>
                <dt className="sr-only">{item?.detail}</dt>

                <dd
                  className="ml-auto text-xs text-zinc-700 dark:text-white"
                  aria-label={`${item?.startYear} - ${item?.endYear}`}
                >
                  <time dateTime={item?.startYear}>{item?.startYear}</time>{" "}
                  <span aria-hidden="true">—</span>{" "}
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
