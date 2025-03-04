import * as S from "./styled";
import pin from "/images/pin.svg";
import clock from "/images/clock.svg";
import { ExpandableText } from "../ExpandableText/ExpandableText";
import { CATEGORYNAME } from "@constants/Booth/data";
import { NO_DATA_MSG } from "@constants/common";
export const BoothInfo = ({ booths = {} }) => {
  const isFood = !booths.booth_name && booths.food_truck_num;

  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>
            {isFood ? CATEGORYNAME.FOODTRUCK : booths.club_name}
          </S.ClubTitle>
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
          <img src={clock} />
          <S.TextInfo>
            {booths?.day_display
              ?.map((booth) => `(${booth.name})`)
              .join(", ") || NO_DATA_MSG}
            &nbsp;
            {booths.start_time}~{booths.end_time}
          </S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>
            {booths.location}
            &nbsp;
            {isFood ? booths.food_truck_num : booths.booth_num}번 부스
          </S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
