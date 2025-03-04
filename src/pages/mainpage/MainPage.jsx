import * as S from './styled';
import { MainNavigation } from '../../components/MainNavigate/MainNavigation';
import { FloatingBubbles } from '@components/FloatingBubbles/FloatingBubbles';

export const MainPage = () => {
  return (
    <S.Wrapper>
      <FloatingBubbles />
      <MainNavigation />
    </S.Wrapper>
  );
};
