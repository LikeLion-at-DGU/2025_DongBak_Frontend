import { useState, useEffect, useCallback } from "react";
import { getTodayPerformance } from "@apis/performance";
import dayjs from "dayjs";

export const usePerformanceData = (day) => {
  const [performanceData, setPerformanceData] = useState(null);

  const fetchData = useCallback(async () => {
    const res = await getTodayPerformance(day);
    setPerformanceData(res);
  }, [day]);

  const groupPerformancesByHour = useCallback(() => {
    if (!performanceData) return [];

    const grouped = performanceData.reduce((acc, cur) => {
      const hourKey = dayjs(cur.startTime, "HH:mm").format("HH:00");
      if (!acc[hourKey]) acc[hourKey] = [];
      acc[hourKey].push(cur);
      return acc;
    }, {});

    return Object.entries(grouped).map(([time, performances]) => ({
      time,
      performances,
    }));
  }, [performanceData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return groupPerformancesByHour();
};
