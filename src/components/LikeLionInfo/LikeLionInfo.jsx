import * as S from "./styled";
import { LikeLionIntro } from "../../constants/BoothDetail/data";
import { LionInfoText } from "../../constants/BoothDetail/data";
import likelionLogo from "../../../public/images/likelion.svg";
export const LikeLionInfo = () => {
  return (
    <S.InfoContainer>
      <S.Title>{LionInfoText[0].IntroTitle}</S.Title>
      <S.LionContainer>
        <img src={likelionLogo} />
        <S.LionInfoWrapper>
          <S.SubInfo>{LionInfoText[0].category}</S.SubInfo>
          <S.MainInfo>{LionInfoText[0].club}</S.MainInfo>
        </S.LionInfoWrapper>
      </S.LionContainer>
      <S.LionInfoBox>{LikeLionIntro}</S.LionInfoBox>
    </S.InfoContainer>
  );
};
