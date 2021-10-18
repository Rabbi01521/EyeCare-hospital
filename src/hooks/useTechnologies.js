import { useEffect, useState } from "react";

const useTechnologies = () => {
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    fetch("/technologies.JSON")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);
  return [technologies, setTechnologies];
};

export default useTechnologies;
