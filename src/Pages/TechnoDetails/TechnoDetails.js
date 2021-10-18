import React from "react";
import { useParams } from "react-router";

const TechnoDetails = () => {
  const { techId } = useParams();
  console.log(techId);
  return (
    <div>
      <h2>this is techno: {techId} </h2>
    </div>
  );
};

export default TechnoDetails;
