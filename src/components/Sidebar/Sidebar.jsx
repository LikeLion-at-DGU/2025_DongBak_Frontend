import * as S from './styled';
import hamburger from '/images/hamburger.svg';
import useCustomNavigate from '@hooks/useCustomNavigate';
import { ROUTE_PATHS } from '@constants/routeConstants';
import { SIDEBAR_CONSTANT } from '@constants/sidebarConstant';

export const Sidebar = () => {
  const { goToPage } = useCustomNavigate();
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
        <S.HeaderContent onClick={() => goToPage(ROUTE_PATHS.MAIN)}>
          {SIDEBAR_CONSTANT.home}
        </S.HeaderContent>
        <S.HeaderContent onClick={() => goToPage(ROUTE_PATHS.BOOTH)}>
          {SIDEBAR_CONSTANT.booth}
        </S.HeaderContent>
        <S.HeaderContent onClick={() => goToPage(ROUTE_PATHS.PERFORMANCE)}>
          {SIDEBAR_CONSTANT.perfomance}
        </S.HeaderContent>
        <S.AboutUs onClick={() => goToPage(ROUTE_PATHS.DEVELOPERS)}>
          {SIDEBAR_CONSTANT.aboutus}
        </S.AboutUs>
      </S.Sidebar>
    </S.Wrapper>
  );
};
