import React, { Children } from "react";
import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import poz from "../assets/poz_dark_adobe_express.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const path = window.location.pathname;
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <nav className="border-black bg-[#ED70C0]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/guard-the-lion-shrine" className="flex items-center">
          <img src={poz} className="h-8 mr-3" alt="Guard the Lion Shrine" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Guard the Lion Shrine
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className={
              isNavOpen
                ? "showMenuNav animate__animated animate__fadeIn"
                : "hideMenuNav"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              className="flex flex-col items-center justify-between min-h-[250px]"
              onClick={() => setIsNavOpen(false)}
            >
              <li className="my-8 uppercase">
                <Link to="/guard-the-lion-shrine">Home</Link>
              </li>
              <li className="my-8 uppercase">
                <Link to="/guard-the-lion-shrine/about">About</Link>
              </li>
              <li className="my-8 uppercase">
                <Link to="/guard-the-lion-shrine/schedule">Schedule</Link>
              </li>
              <li className="my-8 uppercase">
                <Link to="/guard-the-lion-shrine/organizations">
                  Organizations
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <CustomLink to="/guard-the-lion-shrine">Home</CustomLink>
            <CustomLink to="/guard-the-lion-shrine/about">About</CustomLink>
            <CustomLink to="/guard-the-lion-shrine/schedule">
              Schedule
            </CustomLink>
            <CustomLink to="/guard-the-lion-shrine/organizations">
              Organizations
            </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={
        isActive
          ? "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
          : "block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0"
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

// function HamburgerLink({to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true});
//   return (

//   );
// }

export default Navbar;
