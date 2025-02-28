import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { BoothSearchService } from "../apis/SearchService";

export const useBoothSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  // 디바운스 적용 (300ms 후 API 호출)
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const data = await BoothSearchService.searchBooth(debouncedQuery);
        setResults(data);
      } catch (error) {
        console.error("검색 실패", error);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return { query, setQuery, results, clearSearch };
};