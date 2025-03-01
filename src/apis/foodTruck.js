import { instance } from "./instance";
export const getFoodTruck = async (day) => {
  try {
    const res = await instance.get(`/api/booth/home/${day}}/foodtruck`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
