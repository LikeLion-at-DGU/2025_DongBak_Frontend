import * as S from "./styled";

import calendar from "../../../public/images/calendar.svg";
import instaIcon from "../../../public/images/instaIcon.svg";
import pencil from "../../../public/images/pencil.svg";
import { LionInfoText } from "../../constants/BoothDetail/data";
export const RecruitInfo = () => {
  return (
    <S.InfoContainer>
      <S.Title>{LionInfoText[0].TogetherTitle}</S.Title>

      <S.LionInfoBox>
        <S.TextBox>
          <img src={calendar} />
          <S.TextInfo>{LionInfoText[0].term}</S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <img src={pencil} />
          <S.TextInfo>{LionInfoText[0].method}</S.TextInfo>
        </S.TextBox>
        <S.TextBox>
          <a
            href="https://www.instagram.com/likelion_dongguk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Instagram" />
          </a>
          <S.TextInfo>{LionInfoText[0].insta}</S.TextInfo>
        </S.TextBox>
      </S.LionInfoBox>
    </S.InfoContainer>
  );
};
