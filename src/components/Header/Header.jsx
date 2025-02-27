import * as S from "./styled";
import search from "../../../public/images/search-normal.svg";
import Menubar from "../../../public/images/Menubars.svg";
export const Header = ({ Title, isTrue }) => {
  return (
    <S.TitleContainer>
      <S.Title>{Title}</S.Title>
      <S.ImgBox>
        {isTrue && <img src={search} />}
        <img src={Menubar} />
      </S.ImgBox>
    </S.TitleContainer>
  );
};
