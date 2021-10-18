import React from "react";

const ChooseUs = () => {
  return (
    <section style={{ backgroundColor: "#f4faff" }} className="pt-10 pb-20">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-indigo-700 ">
            Why Patients Choose Our Hospital
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-6 px-8">
          <div className="px-6">
            <img
              alt="..."
              style={{ borderRadius: "50% 50% 61% 39% / 72% 36% 64% 28%" }}
              src="https://kamleshyadav.com/wp/medicalequipment/medicalequipment-home-four/wp-content/uploads/sites/5/2020/10/download-1.svg"
              className="shadow-lg bg-white hover:rounded-full mx-auto  w-32 p-5"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-indigo-700">
                Conversations
              </h5>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              style={{ borderRadius: "50% 50% 61% 39% / 72% 36% 64% 28%" }}
              src="https://kamleshyadav.com/wp/medicalequipment/medicalequipment-home-four/wp-content/uploads/sites/5/2020/10/2p.svg"
              className="shadow-lg bg-white hover:rounded-full mx-auto w-32 p-5"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-indigo-700">Checkup</h5>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              style={{ borderRadius: "50% 50% 61% 39% / 72% 36% 64% 28%" }}
              src="https://kamleshyadav.com/wp/medicalequipment/medicalequipment-home-four/wp-content/uploads/sites/5/2020/10/3p.svg"
              className="shadow-lg bg-white hover:rounded-full mx-auto  w-32 p-5"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-indigo-700">Treatment</h5>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              style={{ borderRadius: "50% 50% 61% 39% / 72% 36% 64% 28%" }}
              src="https://kamleshyadav.com/wp/medicalequipment/medicalequipment-home-four/wp-content/uploads/sites/5/2020/10/4p.svg"
              className="shadow-lg bg-white hover:rounded-full mx-auto  w-32 p-5"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-indigo-700">Save Life</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
