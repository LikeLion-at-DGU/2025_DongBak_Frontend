import * as S from "./styled";
import search from "/images/search-normal.svg";
import Menubar from "/images/Menubars.svg";
import Back from "/images/SearchBack.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";

import { ROUTE_PATHS } from "@constants/routeConstants";
export const Header = ({ title, isTrue = false, hasSearchResults }) => {
  const { goToPage } = useCustomNavigate();
  return (
    <S.TitleContainer>
      <S.FirstImgBox>
        {hasSearchResults && (
          <img src={Back} onClick={() => goToPage(ROUTE_PATHS.BOOTH)} />
        )}
      </S.FirstImgBox>
      <S.Title>{title}</S.Title>
      <S.SecondImgBox>
        {isTrue && (
          <img src={search} onClick={() => goToPage(ROUTE_PATHS.SEARCH)} />
        )}
        <img src={Menubar} />
      </S.SecondImgBox>
    </S.TitleContainer>
  );
};
