import * as S from "./styled";
import pin from "/images/pin.svg";
import clock from "/images/clock.svg";
import { ExpandableText } from "../ExpandableText/ExpandableText";
export const BoothInfo = ({ booths }) => {
  const isFood = !booths.booth_name && booths.food_truck_num;

  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>{isFood ? "푸드트럭" : booths.club_name}</S.ClubTitle>
          <S.BoothTitle>
            {isFood ? booths.food_truck_name : booths.booth_name}
          </S.BoothTitle>
        </S.ClubInfoBox>

        <S.BoothInfoBox>
          <ExpandableText
            text={
              isFood ? booths.food_truck_description : booths.booth_description
            }
          />
        </S.BoothInfoBox>
      </S.ClubInfoWrapper>
      <S.BoothDInfoBox>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>
            {booths?.day_display
              ?.map((booth) => `(${booth.name})`)
              .join(", ") || "(요일 정보 없음)"}
            {booths.start_time}~{booths.end_time}
          </S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={clock} />
          <S.TextInfo>
            {booths.location}
            {isFood ? booths.food_truck_num : booths.booth_num}번 부스
          </S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
