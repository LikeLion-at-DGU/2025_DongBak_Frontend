import * as S from "./styled";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
import { ExpandableText } from "../ExpandableText/ExpandableText";
export const BoothInfo = ({ booth }) => {
  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>{booth.club_name}</S.ClubTitle>
          <S.BoothTitle>{booth.booth_name}</S.BoothTitle>
        </S.ClubInfoBox>

        <S.BoothInfoBox>
          <ExpandableText text={booth.booth_description} />
        </S.BoothInfoBox>
      </S.ClubInfoWrapper>
      <S.BoothDInfoBox>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>
            {booth.day_display.map((d) => `(${d.name})`).join(", ")}
            {""}
            {booth.start_time}~{booth.end_time}
          </S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={clock} />
          <S.TextInfo>
            {booth.location} {""}
            {booth.booth_num}번 부스
          </S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
