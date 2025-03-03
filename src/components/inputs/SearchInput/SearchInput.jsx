import * as S from "./styled";

export const SearchInput = ({ placehoder, searchIconRoute, vectorIconRoute, query, setQuery, clearSearch, onEnter }) => {
  return (
    <S.Wrapper>
      <S.Icon src={searchIconRoute}/>
      <S.Input 
        placeholder={placehoder}
        maxLength={25}
        value={query}
        enterKeyHint="search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
      />
      {query && <S.IconRight src={vectorIconRoute} onClick={clearSearch} />}
    </S.Wrapper>
  )
}