import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/eyecare_logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <Link
              to="/home"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img className="w-20 h-20 text-white p-2" src={logo} alt="" />
            </Link>
            <p className="mt-2 text-sm flex flex-row">
              EyeCare Hospital (Pvt) Ltd. is a leading <br /> private hospital
              at Khilgaon, Dhaka, Bangladesh. . . .
            </p>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/aboutus"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consultants"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Consultants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/technologies"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Technologies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="signin"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/doctors"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Doctors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/policy"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
              >
                {" "}
                by{" "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                EyeCare
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
