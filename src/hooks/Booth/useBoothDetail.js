import { getBoothDetail } from "@apis/booth";
import { useState, useEffect } from "react";
//부스디테일 페이지
export const useBoothDetail = (id) => {
  const [boothData, setBoothData] = useState(null);

  const fetchBoothDetail = async () => {
    try {
      const res = await getBoothDetail(id);
      console.log("res.data:", res.data);
      setBoothData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoothDetail();
  }, []);

  return { boothData };
};
