import * as S from "./styled";

export const Btn = ({ place, isClick, onClick }) => {
  return (
    <S.ButtonComp $isClick={isClick} onClick={onClick}>
      {place}
    </S.ButtonComp>
  );
};
