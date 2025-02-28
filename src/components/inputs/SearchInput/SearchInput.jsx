import * as S from "./styled";
import { useBoothSearch } from "../../../hooks/useSearch";

export const SearchInput = ({ placehoder, searchIconRoute, vectorIconRoute }) => {
  const { query, setQuery, results, clearSearch } = useBoothSearch();
  return (
    <S.Wrapper>
      <S.Icon src={searchIconRoute}/>
      <S.Input 
        placeholder={placehoder}
        maxLength={25}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && <S.IconRight src={vectorIconRoute} onClick={clearSearch} />}
    </S.Wrapper>
  )
}