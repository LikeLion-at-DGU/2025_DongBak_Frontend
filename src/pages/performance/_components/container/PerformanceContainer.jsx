import * as S from "./styled";

export const PerformanceContainer = ({ children }) => {
  return (
    <S.OuterWrapper>
      <S.OuterWrapper>
        <S.Title />
        {children}
      </S.OuterWrapper>
    </S.OuterWrapper>
  );
};
