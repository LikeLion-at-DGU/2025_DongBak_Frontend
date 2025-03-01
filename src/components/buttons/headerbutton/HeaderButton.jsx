import * as S from "./styled";

export const HeaderButton = ({ value, onClick, isActive }) => {
  return (
    <S.Wrapper onClick={onClick} $isActive={isActive}>
      {value}
    </S.Wrapper>
  )
}