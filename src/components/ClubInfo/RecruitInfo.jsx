import * as S from "./styled";

import calendar from "/images/calendar.svg";
import instaIcon from "/images/instaIcon.svg";
import pencil from "/images/pencil.svg";
import { ExpandableText } from "@components/ExpandableText/ExpandableText";
import { NO_DATA_MSG } from "@constants/common";
export const RecruitInfo = ({ booth }) => {
  const extractInstagramId = (booth) => {
    if (
      !booth.insta_url ||
      typeof booth.insta_url !== "string" ||
      booth.insta_url === "-"
    ) {
      return null;
    }

    const match = booth.insta_url.match(
      /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^/?]+)/
    );
    return match ? match[1] : null;
  };

  const instagramId = extractInstagramId(booth);
  return (
    <S.InfoContainer>
      <S.Title>{booth.club_name}과 함께해요!</S.Title>

      <S.LionInfoBox>
        <S.TextBox>
          <img src={calendar} alt="캘린더" />
          <S.TextInfo>
            모집 기간 | {""}
            {booth.recruitment}
          </S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <img src={pencil} alt="연필" />
          <S.TextInfo>
            신청 방법 | {""}
            <ExpandableText text={booth.apply_method} isOneSentence={true} />
          </S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <a href={booth.insta_url} target="_blank">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <S.TextInfo>
            {instagramId ? `@${instagramId}` : NO_DATA_MSG}
          </S.TextInfo>
        </S.TextBox>
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
