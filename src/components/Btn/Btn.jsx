import * as S from "./styled";

export const Btn = ({ place, isClick }) => {
  return <S.ButtonComp isClick={isClick}>{place}</S.ButtonComp>;
};
