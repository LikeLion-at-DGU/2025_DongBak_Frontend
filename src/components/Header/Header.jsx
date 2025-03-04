import * as S from "./styled";
import { useState } from "react";
import search from "/images/search-normal.svg";
import Back from "/images/SearchBack.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
import Hamburger from "hamburger-react";
import { ROUTE_PATHS } from "@constants/routeConstants";
export const Header = ({ title, isTrue = false, hasSearchResults }) => {
  const { goToPage } = useCustomNavigate();
  const [isOpen, setOpen] = useState(false);

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
          <S.Image src={search} onClick={() => goToPage(ROUTE_PATHS.SEARCH)} />
        )}

        <S.HamburgerBox>
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </S.HamburgerBox>

        {isOpen && <Sidebar />}
      </S.SecondImgBox>
    </S.TitleContainer>
  );
};
