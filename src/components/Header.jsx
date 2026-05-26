import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MobileMenu from "../utils/MobileMenu";
import Switcher from "../utils/Switcher";

const Header = () => {
  const linkClass =
    "relative block px-3 py-2 transition hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:text-blue-400";
  const activeClass = "text-blue-600 dark:text-blue-400";

  return (
    <header className="top-0 z-10 h-16 pt-4">
      <div className="sm:px-8 w-full">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1"></div>
                <div className="flex flex-1 justify-end md:justify-center">
                  <div
                    className="pointer-events-auto md:hidden"
                    data-headlessui-state=""
                  >
                    <MobileMenu />
                  </div>
                  <nav className="pointer-events-auto hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                          }
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <HashLink className={linkClass} to="/#about">
                          About
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className={linkClass} to="/#experience">
                          Experience
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className={linkClass} to="/#contact">
                          Contact
                        </HashLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                          }
                          to="/projects"
                        >
                          Projects
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex justify-end md:flex-1">
                  <div className="pointer-events-auto flex">
                    <Switcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
