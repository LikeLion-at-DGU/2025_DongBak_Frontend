import * as S from "./styled";

export const Date = ({ date, day, isClick, onClick }) => {
  return (
    <S.DateContainer $isClick={isClick} onClick={onClick}>
      <S.DateNum $isClick={isClick}>{date}</S.DateNum>
      <S.Date $isClick={isClick}>{day}</S.Date>
    </S.DateContainer>
  );
};
