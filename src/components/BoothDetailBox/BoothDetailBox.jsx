import * as S from "./styled";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
import defaultImg from "../../../public/images/defaultImg.svg";
export const BoothDetailBox = ({ booth, onClick }) => {
  return (
    <S.BoothDContainer onClick={onClick}>
      <S.BoothDImg src={booth.booth_image?.[0] || defaultImg} />
      <S.TextContainer>
        <S.TextBox>
          <S.MainText>{booth.club_name || "정보 없음"}</S.MainText>
          <S.SubText>{booth.booth_name || "부스 정보 없음"}</S.SubText>
        </S.TextBox>
        <S.TextDetailBox>
          <S.TextDetail>
            <img src={pin} />
            <S.TextInfo>
              {booth.day.map((d) => `(${d.name})`).join(", ")}
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
        </S.TextDetailBox>
      </S.TextContainer>
    </S.BoothDContainer>
  );
};
