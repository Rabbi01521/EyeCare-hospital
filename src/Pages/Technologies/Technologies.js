import React from "react";
import useTechnologies from "../../hooks/useTechnologies";
import Technology from "../Technology/Technology";

const Technologies = () => {
  const [technologies] = useTechnologies();
  console.log(technologies);
  return (
    <div>
      <div className="bg-white">
        <div>
          <div>
            <div
              className="h-40 bg-green-800	bg-left-top bg-auto bg-repeat-x  flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://specialisthospital.in/wp-content/uploads/2020/09/aboutus_banner.jpg)",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              <h1 className="border-4 border-indigo-500 border-opacity-100 text-blue-800 p-3 text-3xl font-black">
                Technologies
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-indigo-900">
            OUR Technology
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {technologies?.map((product) => (
              <Technology
                key={product._id}
                product={product}
                className="group relative"
              ></Technology>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
