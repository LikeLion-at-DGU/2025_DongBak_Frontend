import * as S from "./styled";

export const Date = ({ DateNum, Date, isClick, onClick }) => {
  return (
    <S.DateContainer $isClick={isClick} onClick={onClick}>
      <S.DateNum $isClick={isClick}>{DateNum}</S.DateNum>
      <S.Date $isClick={isClick}>{Date}</S.Date>
    </S.DateContainer>
  );
};
