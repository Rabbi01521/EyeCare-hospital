import React from "react";
import { useParams } from "react-router";
import useServices from "../../hooks/useServices";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [services] = useServices();

  const findService = services.find(
    (service) => service.index === parseInt(serviceId)
  );
  console.log(findService);
  return (
    <div className="">
      {/* <h1 className="text-center text-9xl">this is service : {serviceId}</h1> */}
      <div>
        <div>
          <div
            className="  h-40 bg-green-800	bg-left-top bg-auto bg-repeat-x  flex justify-center items-center"
            style={{
              backgroundImage:
                "url(https://specialisthospital.in/wp-content/uploads/2020/09/aboutus_banner.jpg)",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
            }}
          >
            <h1 className="border-4 border-indigo-500 border-opacity-100 text-blue-800 p-3 text-3xl font-black">
              {findService?.name}
            </h1>
          </div>
        </div>
      </div>
      <section className="relative pt-12 bg-blueGray-50 my-8">
        <div className="items-center flex flex-wrap">
          <div className="w-full mb-4 md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full h-full rounded-lg shadow-lg"
              src={findService?.images}
            />
          </div>
          <div className="w-full sm:my-4 md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl text-indigo-700 font-semibold">
                {findService?.name}
              </h3>
              <h2 className="mt-3 text-indigo-700 text-xl">
                What is {findService?.name}?
              </h2>
              <p className=" text-lg leading-relaxed text-blueGray-500">
                {findService?.about}
              </p>
              <h2 className="mt-3 text-indigo-700 text-xl">
                What is the Treatment?
              </h2>
              <p className=" text-lg leading-relaxed text-blueGray-500">
                {findService?.Treatment}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
