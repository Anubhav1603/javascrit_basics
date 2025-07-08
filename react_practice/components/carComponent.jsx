import { useState } from "react";

export const CarComponent = () => {
  const [carData, setCarData] = useState({
    brand: "Hundai",
    name: "suzuki",
    manufactuerer: "Mukesh",
  });
  const changeInfo = () => {
    setCarData((prev) => {
      return { ...prev, manufactuerer: "Dharmesh" };
    });
  };
  return (
    <>
      <p>The name of the car is {carData.name}</p>
      <p>The brand of the car is {carData.brand}</p>
      <p>The manufactuerer of the car is {carData.manufactuerer}</p>
      <button onClick={changeInfo}>Change Information</button>
    </>
  );
};
