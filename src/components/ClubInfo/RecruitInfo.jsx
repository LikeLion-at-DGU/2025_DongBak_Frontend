import * as S from "./styled";

import calendar from "../../../public/images/calendar.svg";
import instaIcon from "../../../public/images/instaIcon.svg";
import pencil from "../../../public/images/pencil.svg";
export const RecruitInfo = ({ booth }) => {
  return (
    <S.InfoContainer>
      <S.Title>{booth.club_name}과 함께해요!</S.Title>

      <S.LionInfoBox>
        <S.TextBox>
          <img src={calendar} alt="캘린더" />
          <S.TextInfo>
            모집 기간 | {""}
            {booth.start_recruitment}~{booth.end_recruitment}
          </S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <img src={pencil} alt="연필" />
          <S.TextInfo>
            신청 방법 | {""}
            {booth.apply_method}
          </S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <a href={booth.insta_url} target="_blank">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <S.TextInfo>{booth.insta_url}</S.TextInfo>
        </S.TextBox>
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
