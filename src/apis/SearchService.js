import { instance } from "./instance";

export const BoothSearchService = {
  searchBooth: async (query) => {
    // try {
    //   const response = await instance.get(`/api/booth/search?q=${query}`);
    //   return response.data
    // } catch (error) {
    //   console.error("부스 검색 API 호출 실패", error);
    //   return [];
    // }
    return Promise.resolve();
  }
};