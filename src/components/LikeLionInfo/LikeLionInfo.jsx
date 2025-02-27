import * as S from "./styled";
import { LikeLionIntro } from "../../constants/BoothDetail/data";
import likelionLogo from "../../../public/images/likelion.svg";
export const LikeLionInfo = () => {
  return (
    <S.InfoContainer>
      <S.Title>멋쟁이사자처럼을 소개해요!</S.Title>
      <S.LionContainer>
        <img src={likelionLogo} />
        <S.LionInfoWrapper>
          <S.SubInfo>학술분과</S.SubInfo>
          <S.MainInfo>멋쟁이사자처럼</S.MainInfo>
        </S.LionInfoWrapper>
      </S.LionContainer>
      <S.LionInfoBox>{LikeLionIntro}</S.LionInfoBox>
    </S.InfoContainer>
  );
};
