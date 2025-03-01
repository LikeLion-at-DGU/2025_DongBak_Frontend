import { getFoodTruck } from "../apis/foodTruck";
import { useState, useEffect } from "react";

export const useFoodTruckInfo = () => {
  const [foodData, setFoodData] = useState(null);

  const fetchFoodInfo = async () => {
    try {
      const res = await getFoodTruck(day);
      console.log("res.data:", res.data);
      setFoodData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFoodInfo();
  }, []);

  return { foodData };
};
