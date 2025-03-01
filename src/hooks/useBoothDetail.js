import { getBoothDetail } from "../apis/booth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useBoothDetail = () => {
  const { id } = useParams();
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
