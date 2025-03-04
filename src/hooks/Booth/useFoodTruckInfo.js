import { getFoodTruck } from "@apis/foodTruck";
import { useState, useEffect } from "react";
//푸드트럭 List가져오기
export const useFoodTruckInfo = (day) => {
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
  }, [day]);

  return { foodData };
};
