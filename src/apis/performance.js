import { getCamelCaseValue } from "@utils/getCamelCaseValue";
import { instance } from "./instance";

export const getTodayPerformance = async (day = "wednesday") => {
  try {
    const response = await instance.get(`/api/performance/home/${day}`);
    return getCamelCaseValue(response.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
