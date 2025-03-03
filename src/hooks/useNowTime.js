import dayjs from "dayjs";
import { useState, useEffect } from "react";

export const useNowTime = () => {
  const [nowTime, setNowTime] = useState(dayjs);

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(() => dayjs());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return nowTime.format("HH:mm");
};
