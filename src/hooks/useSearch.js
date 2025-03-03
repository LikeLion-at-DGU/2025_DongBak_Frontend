import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { BoothSearchService } from "../apis/SearchService";

export const useBoothSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ booths: [], food_trucks: [] });
  
  // 디바운스 적용 (300ms 후 API 호출)
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults({ booths: [], food_trucks: [] });
      return;
    }

    const fetchResults = async () => {
      try {
        const data = await BoothSearchService.searchBooth(debouncedQuery);
        setResults(() => ({
          booths: data.booths || [],
          food_trucks: data.food_trucks || [],
        }));
      } catch (error) {
        console.error("검색 실패", error);
        setResults({ booths: [], food_trucks: [] });
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery("");
    setResults({ booths: [], food_trucks: [] });
  };

  return { query, setQuery, results, clearSearch };
};