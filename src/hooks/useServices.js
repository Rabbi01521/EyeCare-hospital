import { useEffect, useState } from "react";

const useServices = () => {
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch("/Services.JSON")
      .then((res) => res.json())
      .then((data) => SetServices(data));
  }, []);
  return [services, SetServices];
};

export default useServices;
