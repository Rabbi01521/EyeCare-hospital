import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Consultant = ({ doctor }) => {
  const { index, picture, Specialist, details, name, rating } = doctor;
  return (
    <div>
      <div className="py-6">
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg)",
            }}
          >
            <img
              src={picture ? picture : ""}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">Dr. {name}</h1>
            <p className="mt-2 text-gray-600 text-sm">
              {details.slice(0, 35)}...
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              {Specialist.slice(0, 35)}...
            </p>
            <div className="flex item-center mt-2">
              <Rating
                className="text-yellow-400"
                readonly
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />
            </div>
            <div className="flex item-center justify-between mt-3">
              <Link to={`/consultant/${index}`}>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Make an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultant;
