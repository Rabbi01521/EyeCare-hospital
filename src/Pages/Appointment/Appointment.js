import React from "react";
import { useParams } from "react-router";
import useConsultant from "../../hooks/useConsultant";

const Appointment = () => {
  const { docId } = useParams();
  const [consultants] = useConsultant();

  const doctorFind = consultants.find(
    (doctor) => doctor.index === parseInt(docId)
  );
  console.log(doctorFind);
  return (
    <div>
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
                Doctor
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
                src={doctorFind?.picture}
              />
            </div>
            <div className="w-full sm:my-4 md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl p-3 bg-indigo-600 text-white mb-4 font-semibold">
                  Dr. {doctorFind?.name}
                </h3>
                <p className=" text-lg mb-4 leading-relaxed text-blueGray-500">
                  {doctorFind?.details}
                </p>
                <p className=" text-lg leading-relaxed text-blueGray-500">
                  {doctorFind?.Specialist}
                </p>
                <h3 className="font-bold text-gray-400">Visiting Hours:</h3>
                <p className="font-thin">
                  Saturday to Wednesday: 5.00 pm - 8.00 pm
                </p>

                <div className="mt-5">
                  <h3>
                    Visiting hours may change for any issue, Please call for
                    confirmation.
                  </h3>
                  <p className="font-bold">Get Appointment:</p>
                  <p className="font-bold">Call Us: 096 0000 0000</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Appointment;
