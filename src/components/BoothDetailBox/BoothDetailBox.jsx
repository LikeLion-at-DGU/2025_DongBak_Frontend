import * as S from "./styled";
import ExBoothD from "../../../public/images/ExBoothD.svg";
import pin from "../../../public/images/pin.svg";
import clock from "../../../public/images/clock.svg";
import { BoothDetailInfo } from "../../constants/Booth/data";
export const BoothDetailBox = ({ booth, onClick }) => {
  const boothDetail = BoothDetailInfo.find((b) => b.id === booth?.id);
  return (
    <S.BoothDContainer onClick={onClick}>
      <S.BoothDImg src={boothDetail?.images?.[0] || ExBoothD} />
      <S.TextContainer>
        <S.TextBox>
          <S.MainText>{boothDetail?.club || "정보 없음"}</S.MainText>
          <S.SubText>{boothDetail?.BoothTitle || "부스 정보 없음"}</S.SubText>
        </S.TextBox>
        <S.TextDetailBox>
          <S.TextDetail>
            <img src={pin} />
            <S.TextInfo>{boothDetail?.date || "날짜 정보 없음"}</S.TextInfo>
          </S.TextDetail>
          <S.TextDetail>
            <img src={clock} />
            <S.TextInfo>{boothDetail?.location || "위치 정보 없음"}</S.TextInfo>
          </S.TextDetail>
        </S.TextDetailBox>
      </S.TextContainer>
    </S.BoothDContainer>
  );
};
