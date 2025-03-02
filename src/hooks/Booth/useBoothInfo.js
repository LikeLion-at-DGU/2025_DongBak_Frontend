import { getBoothInfo } from "../../apis/booth";
import { useState, useEffect } from "react";
//부스페이지에서 list가져오기
export const useBoothInfo = (day) => {
  const [boothList, setBoothList] = useState(null);

  const fetchBoothInfo = async () => {
    try {
      const res = await getBoothInfo(day);
      console.log("res.data:", res.data);
      setBoothList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoothInfo();
  }, []);

  return { boothList };
};
