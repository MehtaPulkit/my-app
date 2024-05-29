import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-lg font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/20 dark:hover:ring-white/20">
          Menu
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none  dark:bg-zinc-800 dark:ring-white/20 ">
          <div className="py-1 divide-y divide-slate-200 dark:divide-zinc-200">
            <Menu.Item>
              {({ active }) => (
                <HashLink
                  to="/#about"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-lg dark:text-white dark:hover:bg-zinc-700"
                  )}
                >
                  About
                </HashLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <HashLink
                  to="/#experience"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-lg dark:text-white dark:hover:bg-zinc-700"
                  )}
                >
                  Experience
                </HashLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <HashLink
                  to="/#skills"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-lg dark:text-white dark:hover:bg-zinc-700"
                  )}
                >
                  Skills
                </HashLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/projects"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-lg dark:text-white dark:hover:bg-zinc-700"
                  )}
                >
                  Projects
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/resume"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-4 text-lg dark:text-white dark:hover:bg-zinc-700"
                  )}
                >
                  Resume
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
