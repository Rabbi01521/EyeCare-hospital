import React from "react";
import { useParams } from "react-router";
import useTechnologies from "../../hooks/useTechnologies";

const TechnoDetails = () => {
  const { techId } = useParams();
  const [technologies] = useTechnologies();
  console.log(techId);

  const findTech = technologies.find(
    (technology) => technology.index === parseInt(techId)
  );
  return (
    <div>
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
              {findTech?.name}
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
              src={findTech?.picture}
            />
          </div>
          <div className="w-full sm:my-4 md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl text-indigo-700 mb-4 font-semibold">
                {findTech?.name}
              </h3>
              <p className=" text-lg leading-relaxed text-blueGray-500">
                {findTech?.about}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnoDetails;
