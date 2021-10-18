import React from "react";
import { Link } from "react-router-dom";

const Technology = ({ product }) => {
  const { name, index, picture } = product;
  return (
    <div className=" shadow-lg">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={picture}
          alt={picture}
          className="w-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm ml-3 text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {name.slice(0, 30)}...
          </h3>

          <Link to={`/technologies/${index}`}>
            <button className="my-2 ml-3 block uppercase shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technology;
