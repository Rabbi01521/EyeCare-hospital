import React from "react";
import { Link } from "react-router-dom";

const Service = ({ product }) => {
  const { index, picture, name, about } = product;
  return (
    <div>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={picture}
          alt={picture}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{about.slice(0, 100)}..</p>
          <Link to={`/service/${index}`}>
            <button className="my-2 block uppercase shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
