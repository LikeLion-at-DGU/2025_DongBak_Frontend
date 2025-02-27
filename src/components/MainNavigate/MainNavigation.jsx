import * as S from "./styled";
import { HeaderButton } from "../buttons/headerbutton/HeaderButton";
import useCustomNavigate from "../../hooks/useCustomNavigate";
import { useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/routeConstants";

export const MainNavigation = () => {
  const { goToPage } = useCustomNavigate();
  const location = useLocation();

  return (
    <S.Wrapper>
      <HeaderButton 
        value="HOME" 
        onClick={() => goToPage(ROUTE_PATHS.MAIN)} 
        isActive={location.pathname === "/"} 
      />
      <HeaderButton 
        value="부스 안내" 
        onClick={() => goToPage(ROUTE_PATHS.BOOTH)} 
        isActive={location.pathname === "/booth-guide"} 
      />
      <HeaderButton 
        value="공연 안내" 
        onClick={() => goToPage(ROUTE_PATHS.PERFORMANCE)} 
        isActive={location.pathname === "/performance-guide"} 
      />
    </S.Wrapper>
  );
};