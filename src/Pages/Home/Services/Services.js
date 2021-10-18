import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-indigo-900">
          OUR SPECIALITIES
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services?.map((product) => (
            <Service
              key={product._id}
              product={product}
              className="group relative"
            ></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
