import * as S from "./styled";

import calendar from "../../../public/images/calendar.svg";
import instaIcon from "../../../public/images/instaIcon.svg";
import pencil from "../../../public/images/pencil.svg";
export const RecruitInfo = () => {
  return (
    <S.InfoContainer>
      <S.Title>멋쟁이사자처럼과 함께 해요!</S.Title>

      <S.LionInfoBox>
        <S.TextBox>
          <img src={calendar} />
          <S.TextInfo>모집 기간 | 2월 17일 (월) ~ 3월 9일 (일)</S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <img src={pencil} />
          <S.TextInfo>신청 방법 | 구글 폼</S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <a
            href="https://www.instagram.com/likelion_dongguk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Instagram" />
          </a>
          <S.TextInfo>@likelion_dongguk</S.TextInfo>
        </S.TextBox>
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
