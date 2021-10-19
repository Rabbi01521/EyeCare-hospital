/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../Images/eyecare_logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  // const getUser = JSON.parse(localStorage.getItem("user"));
  // console.log(getUser);
  return (
    <Popover className="relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/home">
              <span className="sr-only">EyeCare</span>
              <img className=" h-10 w-auto sm:h-10" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                    )}
                  >
                    <NavLink to="/home">
                      <span>Home</span>
                    </NavLink>
                  </Popover.Button>
                </>
              )}
            </Popover>

            <NavLink
              to="/aboutus"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About us
            </NavLink>
            <NavLink
              to="/Consultants"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Consultants
            </NavLink>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                    )}
                  >
                    <NavLink to="/technologies">
                      <span>Technologies</span>
                    </NavLink>
                  </Popover.Button>
                </>
              )}
            </Popover>
          </Popover.Group>
          {!user.email ? (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <NavLink
                to="/signin"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </NavLink>
            </div>
          ) : (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <p>{user.displayName}</p>
              <button
                onClick={logOut}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col my-4 items-center justify-center">
                <NavLink
                  to="/home"
                  className="text-base my-2 font-medium text-gray-900 hover:text-gray-700"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/aboutus"
                  className="text-base my-2 font-medium text-gray-900 hover:text-gray-700"
                >
                  About us
                </NavLink>
                <NavLink
                  to="/consultants"
                  className="text-base my-2 font-medium text-gray-900 hover:text-gray-700"
                >
                  Consultants
                </NavLink>
                <NavLink
                  to="/technologies"
                  className="text-base my-2 font-medium text-gray-900 hover:text-gray-700"
                >
                  Technologies
                </NavLink>
              </div>
              {!user.email ? (
                <div>
                  <NavLink
                    to="/signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </NavLink>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <NavLink
                      to="/signin"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </NavLink>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mt-6 mb-4 text-center text-base font-medium text-gray-500">
                    {user.displayName}
                  </p>
                  <button
                    onClick={logOut}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
