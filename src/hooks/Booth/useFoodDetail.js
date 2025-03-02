import { getFoodDetail } from "@apis/foodTruck";
import { useState, useEffect } from "react";
//푸드트럭 상세페이지
export const useFoodDetail = (id) => {
  const [foodDetail, setFoodDetail] = useState(null);

  const fetchFoodDetailInfo = async () => {
    try {
      const res = await getFoodDetail(id);
      console.log("res.data:", res.data);
      setFoodDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFoodDetailInfo();
  }, []);

  return { foodDetail };
};
