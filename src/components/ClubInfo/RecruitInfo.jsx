import * as S from "./styled";

import calendar from "/images/calendar.svg";
import instaIcon from "/images/instaIcon.svg";
import pencil from "/images/pencil.svg";
import { ExpandableText } from "@components/ExpandableText/ExpandableText";
import { NO_DATA_MSG } from "@constants/common";
export const RecruitInfo = ({ booth }) => {
  const extractInstagramId = (url) => {
    if (!url || typeof url !== "string" || url === "-") {
      return null;
    }

    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p\/|reel\/|stories\/|s|tv\/)?([^/?#&]+)/
    );

    return match ? match[1] : null;
  };

  const instagramId = extractInstagramId(booth.insta_url[0]);

  return (
    <S.InfoContainer>
      <S.Title>{booth.club_name}과 함께해요!</S.Title>

      <S.LionInfoBox>
        <S.TextBox>
          <img src={calendar} alt="캘린더" />
          <S.TextInfo>
            <S.FirstText>모집 기간 |</S.FirstText>
            <ExpandableText text={booth.recruitment} isOneSentence={true} />
          </S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <img src={pencil} alt="연필" />
          <S.TextInfo>
            <S.FirstText>신청 방법 | </S.FirstText>
            <ExpandableText text={booth.apply_method} isOneSentence={true} />
          </S.TextInfo>
        </S.TextBox>
        <S.InstaTextBox
          onClick={() => {
            if (booth.insta_url) {
              window.open(booth.insta_url, "_blank");
            }
          }}
        >
          <img src={instaIcon} alt="Instagram" />
          <S.TextInfo
            onClick={() => {
              if (booth.insta_url) {
                window.open(booth.insta_url, "_blank");
              }
            }}
          >
            {instagramId ? `@${instagramId}` : NO_DATA_MSG}
          </S.TextInfo>
        </S.InstaTextBox>
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
