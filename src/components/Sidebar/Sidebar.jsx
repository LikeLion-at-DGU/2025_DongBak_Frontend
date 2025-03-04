import * as S from './styled';
import { useLocation } from 'react-router-dom';
import hamburger from '/images/hamburger.svg';
import useCustomNavigate from '@hooks/useCustomNavigate';
import { ROUTE_PATHS } from '@constants/routeConstants';
import { SIDEBAR_CONSTANT } from '@constants/sidebarConstant';

export const Sidebar = ({ setOpen }) => {
  const { goToPage } = useCustomNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    if (location.pathname === path) {
      setOpen(false); // 현재 경로와 같으면 닫기만 실행
    } else {
      goToPage(path); // 다른 경로일 때만 이동
      setOpen(false); // 이동 후 사이드바 닫기
    }
  };

  return (
    <S.Wrapper>
      <S.Background />
      <S.Sidebar
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <S.Image src={hamburger} />
        <S.Line />
        <S.HeaderContent onClick={() => handleNavigation(ROUTE_PATHS.MAIN)}>
          {SIDEBAR_CONSTANT.home}
        </S.HeaderContent>
        <S.HeaderContent onClick={() => handleNavigation(ROUTE_PATHS.BOOTH)}>
          {SIDEBAR_CONSTANT.booth}
        </S.HeaderContent>
        <S.HeaderContent
          onClick={() => handleNavigation(ROUTE_PATHS.PERFORMANCE)}
        >
          {SIDEBAR_CONSTANT.perfomance}
        </S.HeaderContent>
        <S.AboutUs onClick={() => handleNavigation(ROUTE_PATHS.DEVELOPERS)}>
          {SIDEBAR_CONSTANT.aboutus}
        </S.AboutUs>
      </S.Sidebar>
    </S.Wrapper>
  );
};
