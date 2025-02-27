import * as S from "./styled";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
export const BoothInfo = ({ club, BoothTitle, description }) => {
  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>{club}</S.ClubTitle>
          <S.BoothTitle>{BoothTitle}</S.BoothTitle>
        </S.ClubInfoBox>

        <S.BoothInfoBox>{description}</S.BoothInfoBox>
      </S.ClubInfoWrapper>
      <S.BoothDInfoBox>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>(수) 17:00 ~ 22:00</S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={clock} />
          <S.TextInfo>팔정도 1번 부스</S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
