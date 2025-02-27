import * as S from "./styled";
import ExBoothD from "../../../public/images/ExBoothD.svg";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
export const BoothDetailBox = () => {
  return (
    <S.BoothDContainer>
      <S.BoothDImg src={ExBoothD} />
      <S.TextContainer>
        <S.TextBox>
          <S.MainText>멋-사 문방구</S.MainText>
          <S.SubText>멋쟁이사자처럼</S.SubText>
        </S.TextBox>
        <S.TextDetailBox>
          <S.TextDetail>
            <img src={pin} />
            <S.TextInfo>(수) 17:00 ~ 22:00</S.TextInfo>
          </S.TextDetail>
          <S.TextDetail>
            <img src={clock} />
            <S.TextInfo>팔정도 1번 부스</S.TextInfo>
          </S.TextDetail>
        </S.TextDetailBox>
      </S.TextContainer>
    </S.BoothDContainer>
  );
};
