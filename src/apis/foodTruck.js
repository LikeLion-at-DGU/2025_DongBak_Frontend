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
export const getFoodDetail = async (foodtruck_id) => {
  try {
    const res = await instance.get(`/api/booth/foodtruck/${foodtruck_id}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
