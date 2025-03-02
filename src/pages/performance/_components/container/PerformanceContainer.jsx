import * as S from "./styled";
import { TODAY_PERFORMANCE_TITLE } from "@constants/performaceData";

export const PerformanceContainer = ({ children }) => {
  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <S.Title>{TODAY_PERFORMANCE_TITLE}</S.Title>
        {children}
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};
