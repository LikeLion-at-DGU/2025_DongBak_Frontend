import * as S from "./styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SEARCHPAGE_CONSTANT } from "@constants/searchPageConstant";
import { SearchBox } from "@components/SearchBox/SearchBox";
import { BoothDetailBox } from "@components/BoothDetailBox/BoothDetailBox";
import { useBoothSearch } from "@hooks/useSearch";
import { ErrorBox } from "@components/errorBox/ErrorBox";

export const SearchPage = () => {
  const { query, setQuery, results, clearSearch } = useBoothSearch();
  const navigate = useNavigate();
  const isNothing =
    results?.booths?.length === 0 && results?.food_trucks?.length === 0;

  const goWithResults = () => {
    if (!query.trim()) return; // 빈 검색어 방지
    navigate("/booth", { state: { results } });
  };

  // 부스 클릭 시 해당 부스 데이터만 전달
  const goWithBooths = (booth) => {
    console.log("booth보내지나?", booth);
    navigate("/booth", { state: { booth } });
  };

  return (
    <S.Wrapper>
      <SearchBox
        placehoder={SEARCHPAGE_CONSTANT.searchPlacehoder}
        searchIconRoute={SEARCHPAGE_CONSTANT.searchIconRoute}
        backIconRoute={SEARCHPAGE_CONSTANT.backIconRoute}
        vectorIconRoute={SEARCHPAGE_CONSTANT.vectorIconRoute}
        query={query}
        setQuery={setQuery}
        clearSearch={clearSearch}
        goWithResults={goWithResults}
      />
      <S.BoothContainer $isNothing={isNothing}>
        {/* 검색 결과가 없을 때 */}
        {isNothing && <ErrorBox />}

        {/* 부스 검색 결과 */}
        {results?.booths?.map((booth) => (
          <BoothDetailBox key={booth.id} booth={booth} onClick={goWithBooths} />
        ))}

        {/* 푸드트럭 검색 결과 */}
        {results?.food_trucks?.map((foodTruck) => (
          <BoothDetailBox
            key={foodTruck.id}
            booth={foodTruck}
            goWithBooths={goWithBooths}
          />
        ))}
      </S.BoothContainer>
    </S.Wrapper>
  );
};
