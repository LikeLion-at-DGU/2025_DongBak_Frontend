import * as S from "./styled";
import { ExpandableText } from "@components/ExpandableText/ExpandableText";
export const ClubInfo = ({ booth }) => {
  return (
    <S.InfoContainer>
      <S.Title>{booth.club_name}을 소개해요!</S.Title>
      <S.LionContainer>
        <S.ClubImg src={booth.club_logo} />
        <S.LionInfoWrapper>
          <S.SubInfo>{booth.club_category}</S.SubInfo>
          <S.MainInfo>{booth.club_name}</S.MainInfo>
        </S.LionInfoWrapper>
      </S.LionContainer>
      <S.LionInfoBox>
        <ExpandableText text={booth.club_description} />
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
