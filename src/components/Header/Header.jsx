import * as S from './styled';
import { useState, useEffect } from 'react';
import search from '/images/search-normal.svg';
import Back from '/images/SearchBack.svg';
import { ROUTE_PATHS } from '@constants/routeConstants';
import useCustomNavigate from '@hooks/useCustomNavigate';
import { Fade as Hamburger } from 'hamburger-react';
import { Sidebar } from '@components/Sidebar/Sidebar';

export const Header = ({
  title,
  isTrue = false,
  isDev = false,
  hasSearchResults = false,
}) => {
  const { goToPage } = useCustomNavigate();
  const [isOpen, setOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0); // ✅ 스크롤 값 상태 추가

  // ✅ 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setScrollY(0); // ✅ sidebar가 닫히면 초기값으로 리셋
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        position: 'relative',
        width: '100%',
        paddingTop: '2rem',
      }}
    >
      {isOpen && <Sidebar setOpen={setOpen} />}
      <S.TitleContainer $isDev={isDev}>
        <S.FirstImgBox>
          {hasSearchResults && (
            <img src={Back} onClick={() => goToPage(ROUTE_PATHS.BOOTH)} />
          )}
        </S.FirstImgBox>
        <S.Title>{title}</S.Title>
        <S.SecondImgBox>
          {isTrue && (
            <S.Image
              src={search}
              onClick={() => goToPage(ROUTE_PATHS.SEARCH)}
            />
          )}
          <S.HamburgerBox
            initial={{ y: 0 }}
            animate={{ y: scrollY }}
            transition={{ type: 'tween', duration: 0.01 }}
          >
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </S.HamburgerBox>
        </S.SecondImgBox>
      </S.TitleContainer>
    </div>
  );
};
