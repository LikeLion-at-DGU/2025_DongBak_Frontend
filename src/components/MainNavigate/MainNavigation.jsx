import * as S from './styled';
import { HeaderButton } from '../buttons/headerbutton/HeaderButton';
import useCustomNavigate from '../../hooks/useCustomNavigate';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants/routeConstants';
import { NAVIGATE_CONSTANT } from '../../constants/navigateConstants';

export const MainNavigation = () => {
  const { goToPage } = useCustomNavigate();
  const location = useLocation();

  return (
    <S.Wrapper>
      <HeaderButton
        value={NAVIGATE_CONSTANT.HOME}
        onClick={() => goToPage(ROUTE_PATHS.MAIN)}
        isActive={location.pathname === ROUTE_PATHS.MAIN}
      />
      <HeaderButton
        value={NAVIGATE_CONSTANT.BOOTH}
        onClick={() => goToPage(ROUTE_PATHS.BOOTH)}
        isActive={location.pathname === ROUTE_PATHS.BOOTH}
      />
      <HeaderButton
        value={NAVIGATE_CONSTANT.PERFORMANCE}
        onClick={() => goToPage(ROUTE_PATHS.PERFORMANCE)}
        isActive={location.pathname === ROUTE_PATHS.PERFORMANCE}
      />
    </S.Wrapper>
  );
};
