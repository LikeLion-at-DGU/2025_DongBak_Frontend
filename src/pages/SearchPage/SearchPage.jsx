import * as S from "./styled";

import { SEARCHPAGE_CONSTANT } from "../../constants/searchPageConstant";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { BoothDetailBox } from "../../components/BoothDetailBox/BoothDetailBox";
import { useBoothSearch } from "../../hooks/useSearch";

export const SearchPage = () => {
  const { query, setQuery, results, clearSearch } = useBoothSearch();
  return (
    <S.Wrapper>
      <SearchBox 
        placehoder={SEARCHPAGE_CONSTANT.searchPlacehoder}
        searchIconRoute={SEARCHPAGE_CONSTANT.searchIconRoute}
        backIconRoute={SEARCHPAGE_CONSTANT.backIconRoute}
        vectorIconRoute={SEARCHPAGE_CONSTANT.vectorIconRoute}
      />
      <S.BoothContainer>
        <BoothDetailBox />
        <BoothDetailBox />
      </S.BoothContainer>
    </S.Wrapper>
  )
}