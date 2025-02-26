import * as S from "./styled";

export const Date = ({ DateNum, Date, isclick }) => {
  return (
    <S.DateContainer isClick={isclick}>
      <S.DateNum isClick={isclick}>{DateNum}</S.DateNum>
      <S.Date isClick={isclick}>{Date}</S.Date>
    </S.DateContainer>
  );
};
