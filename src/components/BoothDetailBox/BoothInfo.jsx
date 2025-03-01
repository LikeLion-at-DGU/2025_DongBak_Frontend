import * as S from "./styled";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
import { BoothDetailInfo } from "../../constants/Booth/data";

export const BoothInfo = ({ Club, BoothTitle, Description }) => {
  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>{Club}</S.ClubTitle>
          <S.BoothTitle>{BoothTitle}</S.BoothTitle>
        </S.ClubInfoBox>

        <S.BoothInfoBox>{Description}</S.BoothInfoBox>
      </S.ClubInfoWrapper>
      <S.BoothDInfoBox>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>{BoothDetailInfo[0].date}</S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={clock} />
          <S.TextInfo>{BoothDetailInfo[0].location}</S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
