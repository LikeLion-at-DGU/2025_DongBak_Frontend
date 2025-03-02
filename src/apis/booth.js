import { instance } from "./instance";
export const getBoothInfo = async (day) => {
  try {
    const res = await instance.get(`/api/booth/home/${day}`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const getBoothDetail = async (booth_id) => {
  try {
    const res = await instance.get(`api/booth/home/${booth_id}`);
    return res;
  } catch (err) {
    throw err;
  }
};
