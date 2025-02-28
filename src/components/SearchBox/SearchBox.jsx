import * as S from "./styled";

import { SearchInput } from "../inputs/SearchInput/SearchInput";
import useCustomNavigate from "../../hooks/useCustomNavigate";

export const SearchBox = ({ placehoder, searchIconRoute, backIconRoute, vectorIconRoute }) => {
  const { goBack } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.Icon
        src={backIconRoute}
        onClick={goBack}  
      />
      <SearchInput 
        placehoder={placehoder}
        searchIconRoute={searchIconRoute}
        vectorIconRoute={vectorIconRoute}
      />
    </S.Wrapper>
  )
}