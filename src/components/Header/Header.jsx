import * as S from "./styled";
import search from "/images/search-normal.svg";
import Menubar from "/images/Menubars.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { ROUTE_PATHS } from "@constants/routeConstants";
export const Header = ({ title, isTrue = false }) => {
  const { goToPage } = useCustomNavigate();
  return (
    <S.TitleContainer>
      <S.Title>{title}</S.Title>
      <S.ImgBox>
        {isTrue && (
          <img src={search} onClick={() => goToPage(ROUTE_PATHS.SEARCH)} />
        )}
        <img src={Menubar} />
      </S.ImgBox>
    </S.TitleContainer>
  );
};
