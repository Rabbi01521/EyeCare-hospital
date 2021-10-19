import { useEffect, useState } from "react";

const useConsultant = () => {
  const [consultants, SetConsultants] = useState([]);
  useEffect(() => {
    fetch("/doctors.JSON")
      .then((res) => res.json())
      .then((data) => SetConsultants(data));
  }, []);
  return [consultants, SetConsultants];
};

export default useConsultant;
