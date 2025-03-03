import { useState, useEffect, useCallback } from "react";
import { getTodayPerformance } from "@apis/performance";

export const usePerformanceData = (day) => {
  const [performanceData, setPerformanceData] = useState(null);
  const fetchData = useCallback(async () => {
    const res = await getTodayPerformance(day);
    setPerformanceData(res);
  }, [day]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return performanceData;
};
