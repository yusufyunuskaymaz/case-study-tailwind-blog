import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiBell } from "react-icons/hi";
import { HiSquares2X2 } from "react-icons/hi2";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { blog } = useSelector((state) => state.blog);

  const navigate = useNavigate();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Arbit Blog
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <ul className="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              
              <span className="font-bold" style={{color:"#737373"}} >Posts <span class="bg-green-100 text-green-900 font-bold text-sm relative bottom-3 px-1 py-0.5 rounded-full dark:bg-green-900 dark:text-green-800">{blog.length}</span></span>

              
            </li>
            <li>
            <HiBell size={"1.5em"} color="#737373" />
            </li>
            <li>
            <HiSquares2X2 size={"1.5em"} color="#737373" />
            </li>
          </ul>
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
        </div>
        {/* <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        
      </div> */}
      </div>
    </nav>
  );
}
