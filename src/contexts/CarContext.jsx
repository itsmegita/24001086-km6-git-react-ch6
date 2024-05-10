import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <CarContext.Provider value={{ cars, error }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarContextProvider };
