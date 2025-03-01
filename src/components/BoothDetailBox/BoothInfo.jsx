import * as S from "./styled";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
import { ExpandableText } from "../ExpandableText/ExpandableText";
export const BoothInfo = ({ booth }) => {
  const isFood = !booth.booth_name && booth.food_truck_num;

  return (
    <S.BoothDInfoContainer>
      <S.ClubInfoWrapper>
        <S.ClubInfoBox>
          <S.ClubTitle>{isFood ? "푸드트럭" : booth.club_name}</S.ClubTitle>
          <S.BoothTitle>
            {isFood ? booth.food_truck_name : booth.booth_name}
          </S.BoothTitle>
        </S.ClubInfoBox>

        <S.BoothInfoBox>
          <ExpandableText
            text={
              isFood ? booth.food_truck_description : booth.booth_description
            }
          />
        </S.BoothInfoBox>
      </S.ClubInfoWrapper>
      <S.BoothDInfoBox>
        <S.TextDetail>
          <img src={pin} />
          <S.TextInfo>
            {(isFood
              ? booth?.day_display?.map((d) => `(${d.name})`)
              : booth?.day?.map((d) => `(${d.name})`)
            )?.join(", ") || "(요일 정보 없음)"}
            {booth.start_time}~{booth.end_time}
          </S.TextInfo>
        </S.TextDetail>
        <S.TextDetail>
          <img src={clock} />
          <S.TextInfo>
            {booth.location} {""}
            {isFood ? booth.food_truck_num : booth.booth_num}번 부스
          </S.TextInfo>
        </S.TextDetail>
      </S.BoothDInfoBox>
    </S.BoothDInfoContainer>
  );
};
