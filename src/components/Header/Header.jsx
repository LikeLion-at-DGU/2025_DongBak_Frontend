import * as S from "./styled";
import { useState, useEffect } from "react";
import search from "/images/search-normal.svg";
import { ROUTE_PATHS } from "@constants/routeConstants";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { Fade as Hamburger } from "hamburger-react";
import { Sidebar } from "@components/Sidebar/Sidebar";

export const Header = ({ title, isTrue = false, isDev = false }) => {
  const { goToPage } = useCustomNavigate();
  const [isOpen, setOpen] = useState(false);

  const preventScroll = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      setOpen(false);
    } else {
      goToPage(path);
      setOpen(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "2rem",
      }}
    >
      {isOpen && <Sidebar setOpen={setOpen} />}
      <S.TitleContainer $isDev={isDev}>
        <S.Title>{title}</S.Title>
        <S.SecondImgBox>
          {isTrue && (
            <S.Image
              src={search}
              onClick={() => goToPage(ROUTE_PATHS.SEARCH)}
            />
          )}
          <S.HamburgerBox>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </S.HamburgerBox>
        </S.SecondImgBox>
      </S.TitleContainer>
    </div>
  );
};
