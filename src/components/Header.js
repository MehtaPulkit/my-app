import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Switcher from '../utils/Switcher'
import MobileMenu from '../utils/MobileMenu'

const Header = () => {
  return (
    <div className="top-0 z-10 h-16 pt-4">
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
                      <MobileMenu/>
                     
                    </div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to="/"
                          >
                            About
                          </Link>
                        </li>

                        <li>
                          <HashLink
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to="/#skills"
                          >
                            Skills
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to="/#experience"
                          >
                            Experience
                          </HashLink>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to="projects"
                          >
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            to="resume"
                          >
                            Resume
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <Switcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Header
